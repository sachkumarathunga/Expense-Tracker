import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// ✅ Define a Strongly-Typed Transaction Model
interface Transaction {
  date: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private baseSalary: number = 85000; // ✅ Fixed starting salary for each month
  private transactions: Transaction[] = [];

  private salarySubject = new BehaviorSubject<number>(this.baseSalary);
  salary$ = this.salarySubject.asObservable();

  private remainingBalanceSubject = new BehaviorSubject<number>(this.baseSalary);
  remainingBalance$ = this.remainingBalanceSubject.asObservable();

  private savingsSubject = new BehaviorSubject<number>(this.baseSalary); // ✅ Savings = Remaining Balance
  savings$ = this.savingsSubject.asObservable();

  private expensesByCategorySubject = new BehaviorSubject<{ [key: string]: number }>({});
  expensesByCategory$ = this.expensesByCategorySubject.asObservable();

  private transactionsSubject = new BehaviorSubject<Transaction[]>(this.transactions);
  transactions$ = this.transactionsSubject.asObservable();

  constructor() {}

  // ✅ Reset Salary at the Start of a New Month
  resetMonthlySalary() {
    this.transactions = []; // ✅ Clears previous transactions at month start
    this.salarySubject.next(this.baseSalary);
    this.remainingBalanceSubject.next(this.baseSalary);
    this.savingsSubject.next(this.baseSalary);
    this.transactionsSubject.next(this.transactions);
  }

  // ✅ Adds Transactions Dynamically
  addTransaction(type: 'income' | 'expense', category: string, amount: number, comment: string = 'N/A') {
    const newTransaction: Transaction = { 
      date: new Date().toISOString().split('T')[0], 
      type, 
      category, 
      amount, 
      comment
    };

    this.transactions.push(newTransaction);
    this.transactionsSubject.next(this.transactions);
    this.updateCalculations();
  }

  // ✅ Retrieves All Transactions
  getTransactions(): Transaction[] {
    return this.transactions;
  }

  // ✅ Updates remaining balance and category expenses dynamically
  private updateCalculations() {
    let totalExpenses = this.transactions
      .filter(txn => txn.type === 'expense')
      .reduce((acc, txn) => acc + txn.amount, 0);

    let totalIncome = this.transactions
      .filter(txn => txn.type === 'income')
      .reduce((acc, txn) => acc + txn.amount, 0);

    let newRemainingBalance = (this.baseSalary + totalIncome) - totalExpenses; // ✅ Corrected formula

    this.remainingBalanceSubject.next(newRemainingBalance);
    this.savingsSubject.next(newRemainingBalance); // ✅ Savings = Remaining Balance
    this.expensesByCategorySubject.next(this.calculateCategoryExpenses());
  }

  // ✅ Calculates Category-wise Expenses
  private calculateCategoryExpenses(): { [key: string]: number } {
    let categoryExpenses: { [key: string]: number } = {};

    this.transactions
      .filter(txn => txn.type === 'expense')
      .forEach(txn => {
        categoryExpenses[txn.category] = (categoryExpenses[txn.category] || 0) + txn.amount;
      });

    return categoryExpenses;
  }
}

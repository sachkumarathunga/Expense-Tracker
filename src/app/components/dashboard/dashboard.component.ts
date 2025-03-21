import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceService } from '../../services/finance.service';

interface Transaction {
  date: string;
  type: string;
  category: string;
  amount: number;
  comment?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  salary: number = 85000;
  remainingBalance: number = 0;
  savings: number = 0;
  categoryExpenses: { [key: string]: number } = {};
  transactions: Transaction[] = [];

  constructor(private financeService: FinanceService) {}

  ngOnInit() {
    this.financeService.salary$.subscribe(salary => {
      this.salary = salary;
    });

    this.financeService.remainingBalance$.subscribe(balance => {
      this.remainingBalance = balance;
    });

    this.financeService.savings$.subscribe(savings => {
      this.savings = savings;
    });

    this.financeService.expensesByCategory$.subscribe(expenses => {
      this.categoryExpenses = expenses;
    });

    this.transactions = this.financeService.getTransactions();
  }
}

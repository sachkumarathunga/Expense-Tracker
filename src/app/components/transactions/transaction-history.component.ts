import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  selectedMonth: string = '';
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  transactions: any[] = [];
  filteredTransactions: any[] = [];

  constructor(private financeService: FinanceService) {}

  ngOnInit() {
    // ✅ Fetch transactions on initialization
    this.transactions = this.financeService.getTransactions();
    this.filteredTransactions = [...this.transactions];
  }

  // ✅ Filter transactions based on selected month
  filterTransactions() {
    if (!this.selectedMonth) {
      this.filteredTransactions = [...this.transactions];
      return;
    }

    const monthIndex = this.months.indexOf(this.selectedMonth) + 1; // Convert to 1-12
    this.filteredTransactions = this.transactions.filter(txn => {
      const txnMonth = new Date(txn.date).getMonth() + 1;
      return txnMonth === monthIndex;
    });
  }

  // ✅ Generate & Download PDF of filtered transactions
  downloadPDF() {
    const doc = new jsPDF();
    doc.text('Transaction History - ' + this.selectedMonth, 15, 10);

    const tableData = this.filteredTransactions.map(txn => [
      txn.date, txn.type, txn.category, `LKR ${txn.amount.toFixed(2)}`, txn.comment
    ]);

    autoTable(doc, {
      head: [['Date', 'Type', 'Category', 'Amount', 'Comment']],
      body: tableData,
      startY: 20
    });

    doc.save(`Transaction_History_${this.selectedMonth}.pdf`);
  }
}

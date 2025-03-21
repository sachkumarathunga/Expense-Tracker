import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: any[] = [];

  constructor(private financeService: FinanceService) {}

  ngOnInit() {
    // ✅ Fetch transactions inside ngOnInit()
    this.transactions = this.financeService.getTransactions();
  }
}

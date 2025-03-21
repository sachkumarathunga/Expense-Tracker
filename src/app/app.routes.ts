import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { TransactionHistoryComponent } from './components/transactions/transaction-history.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transaction-history', component: TransactionHistoryComponent }
];

import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component'; // ✅ Corrected Import
import { TransactionHistoryComponent } from './components/transactions/transaction-history.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default page
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'transactions', component: TransactionHistoryComponent } // ✅ Fixed component reference
];

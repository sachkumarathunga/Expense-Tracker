import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [FormsModule, CommonModule],  // ✅ Ensure CommonModule is included
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  type: 'income' | 'expense' = 'expense';
  category: string = '';

  // Predefined categories
  expenseCategories: string[] = ['Brother', 'Home', 'Personal', 'Sister', 'Other'];
  incomeCategories: string[] = ['Salary', 'Freelance', 'Investments', 'Bonus', 'Other'];
  availableCategories: string[] = [];

  amount: number = 0;
  comment: string = '';

  constructor(private financeService: FinanceService) {
    this.onTypeChange();  // Ensure category dropdown updates when component loads
  }

  onTypeChange() {
    this.availableCategories = this.type === 'expense' ? [...this.expenseCategories] : [...this.incomeCategories];

    // Set default category
    if (this.availableCategories.length > 0) {
      this.category = this.availableCategories[0];
    }
  }

  onSubmit() {
    if (!this.category || this.amount <= 0) {
      alert('Please select a valid category and amount.');
      return;
    }

    this.financeService.addTransaction(this.type, this.category, this.amount, this.comment);
    
    alert('Transaction Added!');
    this.category = this.availableCategories.length > 0 ? this.availableCategories[0] : '';
    this.amount = 0;
    this.comment = '';
  }
}

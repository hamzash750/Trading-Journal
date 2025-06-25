import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './summary.html',
  styleUrl: './summary.css'
})
export class Summary implements OnInit {
  capital = 0;
  withdrawals = 0;

  trades: { profitLoss: number; status: 'Valid' | 'N/A' }[] = [];

  ngOnInit() {
    const savedCap = localStorage.getItem('summaryCapital');
    const savedWith = localStorage.getItem('summaryWithdrawals');
    const savedTrades = localStorage.getItem('summaryTrades');
    this.capital = savedCap ? +savedCap : 0;
    this.withdrawals = savedWith ? +savedWith : 0;
    this.trades = savedTrades ? JSON.parse(savedTrades) : [{ profitLoss: 0, status: 'Valid' }];
  }

  save() {
    localStorage.setItem('summaryCapital', String(this.capital));
    localStorage.setItem('summaryWithdrawals', String(this.withdrawals));
    localStorage.setItem('summaryTrades', JSON.stringify(this.trades));
  }

  addTrade() {
    this.trades.push({ profitLoss: 0, status: 'Valid' });
    this.save();
  }

  get netPnL(): number {
    return this.trades.reduce((sum, t) => sum + (t.profitLoss || 0), 0);
  }

  get roi(): number {
    return this.capital ? this.netPnL / this.capital : 0;
  }

  get finalBalance(): number {
    return this.capital + this.netPnL - (this.withdrawals || 0);
  }

  get invalidTrades(): number {
    return this.trades
      .filter(t => t.status === 'N/A')
      .reduce((sum, t) => sum + (t.profitLoss || 0), 0);
  }

  get adjustedBalance(): number {
    return this.finalBalance - this.invalidTrades;
  }
}

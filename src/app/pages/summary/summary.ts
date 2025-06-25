import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trade } from '../../models/trade';

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

  journalTrades: Trade[] = [];

  ngOnInit() {
    const savedCap = localStorage.getItem('summaryCapital');
    const savedWith = localStorage.getItem('summaryWithdrawals');
    const savedTrades = localStorage.getItem('journalTrades');
    this.capital = savedCap ? +savedCap : 0;
    this.withdrawals = savedWith ? +savedWith : 0;
    this.journalTrades = savedTrades ? JSON.parse(savedTrades) : [];
  }

  save() {
    localStorage.setItem('summaryCapital', String(this.capital));
    localStorage.setItem('summaryWithdrawals', String(this.withdrawals));
  }


  get netPnL(): number {
    return this.journalTrades.reduce((sum, t) => sum + (t.profitLoss || 0), 0);
  }

  get roi(): number {
    return this.capital ? this.netPnL / this.capital : 0;
  }

  get finalBalance(): number {
    return this.capital + this.netPnL - (this.withdrawals || 0);
  }

  get invalidTrades(): number {
    return this.journalTrades
      .filter(t => t.status === 'N/A')
      .reduce((sum, t) => sum + (t.profitLoss || 0), 0);
  }

  get adjustedBalance(): number {
    return this.finalBalance - this.invalidTrades;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trade } from '../../models/trade';


@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './journal.html',
  styleUrl: './journal.css'
})
export class Journal implements OnInit {
  trades: Trade[] = [];

  ngOnInit() {
    const saved = localStorage.getItem('journalTrades');
    this.trades = saved ? JSON.parse(saved) : [this.createTrade()];
  }

  addTrade() {
    this.trades.push(this.createTrade());
    this.save();
  }

  updateProfitLoss(trade: Trade) {
    trade.tradeValue = trade.qty * trade.entryPrice;
    if (trade.qty && trade.entryPrice && trade.exitPrice != null) {
      const diff =
        trade.type === 'BUY'
          ? trade.exitPrice - trade.entryPrice
          : trade.entryPrice - trade.exitPrice;
      trade.profitLoss = diff * trade.qty - (trade.charges || 0);
    } else {
      trade.profitLoss = 0;
    }
    this.save();
  }

  private createTrade(): Trade {
    return {
      date: '',
      type: 'BUY',
      script: '',
      qty: 0,
      entryPrice: 0,
      exitPrice: 0,
      charges: 0,
      status: 'Valid',
      tradeValue: 0,
      profitLoss: 0,
    };
  }

  save() {
    localStorage.setItem('journalTrades', JSON.stringify(this.trades));
  }
}

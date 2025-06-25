import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Trade {
  date: string;
  type: 'BUY' | 'SELL';
  script: string;
  qty: number;
  entryPrice: number;
  exitPrice: number;
  charges: number;
  status: 'Valid' | 'N/A';
  profitLoss: number;
}

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './journal.html',
  styleUrl: './journal.css'
})
export class Journal {
  trades: Trade[] = [this.createTrade()];

  addTrade() {
    this.trades.push(this.createTrade());
  }

  updateProfitLoss(trade: Trade) {
    if (trade.qty && trade.entryPrice && trade.exitPrice != null) {
      const diff =
        trade.type === 'BUY'
          ? trade.exitPrice - trade.entryPrice
          : trade.entryPrice - trade.exitPrice;
      trade.profitLoss = diff * trade.qty - (trade.charges || 0);
    } else {
      trade.profitLoss = 0;
    }
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
      profitLoss: 0,
    };
  }
}

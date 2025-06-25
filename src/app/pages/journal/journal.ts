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
  modalVisible = false;
  editingTrade: Trade = this.createTrade();
  editingIndex: number | null = null;

  ngOnInit() {
    const saved = localStorage.getItem('journalTrades');
    this.trades = saved ? JSON.parse(saved) : [];
  }

  openAddModal() {
    this.editingTrade = this.createTrade();
    this.editingIndex = null;
    this.modalVisible = true;
  }

  openEditModal(index: number) {
    this.editingTrade = { ...this.trades[index] };
    this.editingIndex = index;
    this.modalVisible = true;
  }

  saveTrade() {
    if (this.editingIndex === null) {
      this.trades.push({ ...this.editingTrade });
    } else {
      this.trades[this.editingIndex] = { ...this.editingTrade };
    }
    this.save();
    this.modalVisible = false;
  }

  deleteTrade(index: number) {
    this.trades.splice(index, 1);
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

    if (trade.profitLoss > 0) {
      trade.status = 'Profit';
    } else if (trade.profitLoss < 0) {
      trade.status = 'Loss';
    } else {
      trade.status = 'Breakeven';
    }
  }

  onModalFieldChange() {
    this.updateProfitLoss(this.editingTrade);
  }

  closeModal() {
    this.modalVisible = false;
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
      status: 'Breakeven',
      tradeValue: 0,
      profitLoss: 0,
      reason: '',
    };
  }

  save() {
    localStorage.setItem('journalTrades', JSON.stringify(this.trades));
  }
}

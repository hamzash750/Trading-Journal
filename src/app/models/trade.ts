export interface Trade {
  date: string;
  type: 'BUY' | 'SELL';
  script: string;
  qty: number;
  entryPrice: number;
  exitPrice: number;
  charges: number;
  /**
   * Status derived from the profit/loss amount. A positive P&L
   * results in "Profit", a negative one in "Loss" and zero in
   * "Breakeven".
   */
  status: 'Profit' | 'Loss' | 'Breakeven';
  tradeValue: number;
  profitLoss: number;
  reason: string;
}

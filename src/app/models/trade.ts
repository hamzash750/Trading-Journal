export interface Trade {
  date: string;
  type: 'BUY' | 'SELL';
  script: string;
  qty: number;
  entryPrice: number;
  exitPrice: number;
  charges: number;
  status: 'Valid' | 'N/A';
  tradeValue: number;
  profitLoss: number;
}

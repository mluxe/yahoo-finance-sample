
export type StockSummary = {
  symbol: string,
  first_trading_date: string,
  last_trading_date: string,
  fx_charge_amount: number,
  quantity_holding: number,
  amount_holding: number,
  quantity_sold: number,
  quantity_bought: number,
  avg_sold_price: number,
  avg_bought_price: number,
  total_sold_amount: number,
  total_bought_amount: number,
  commission_fee: number,
  profit_and_loss: number,
  profit_and_loss_pct: number,
}

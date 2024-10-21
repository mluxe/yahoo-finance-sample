
export type DealingTransaction = {
  id?: number;
  account_id?: number;
  date?: string;
  reference?: string;
  type?: string;
  company_code?: string;
  market?: string;
  quantity?: number;
  currency?: string;
  executed_price?: number;
  executed_price_usd?: number;
  net_amount?: number;
  net_amount_usd?: number;
  exchange_rate?: number;
  fx_charge_rate?: number;
  fx_charge_amount?: number;
  commission_fee?: number;
  commission_fee_usd?: number;
  transaction_amount?: number;
  transaction_amount_usd?: number;
  balance_book_cost?: number;
  balance_book_cost_usd?: number;
  balance_book_price?: number;
  balance_quantity?: number;
  profit_loss?: number;
}

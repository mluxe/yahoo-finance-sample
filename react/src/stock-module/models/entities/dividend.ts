
export type Dividend = {
  id?: number;
  account_id?: number;
  date?: string;
  stock?: string;
  xd_date?: Date;
  shares?: number;
  dividend_currency?: string;
  dividend_rate?: number;
  gross_dividend?: number;
  exchange_rate?: number;
  dividend_payable_currency?: string;
  gross_dividend_payable?: number;
}

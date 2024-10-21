
type YahooStockMeta = {
  currency: string;
  symbol: string;
  exchangeName: string;
  fullExchangeName: string;
  firstTradeDate: number;
  regularMarketTime: number;
  hasPrePostMarketData: boolean;
  gmtoffset: number;
  timezone: string;
  exchangeTimezoneName: string;
  regularMarketPrice: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  longName: string;
  shortName: string;
  marketCap: number;
  currentTradingPeriod: {
    pre: {
      timezone: string;
      start: number;
      end: number;
      gmtoffset: number;
    };
    regular: {
      timezone: string;
      start: number;
      end: number;
      gmtoffset: number;
    };
    post: {
      timezone: string;
      start: number;
      end: number;
      gmtoffset: number;
    };
  };
}

type YahooStockQuote = {
  datetime: string;
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  change: number | null;
  changePercent: number | null;
}

export type YahooStockQuoteData = {
  meta: YahooStockMeta;
  quotes: YahooStockQuote[];
}

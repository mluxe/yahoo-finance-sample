import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Buffer} from 'buffer';
import {Ticker} from './pricing-data';
import NodeCache from 'node-cache';

const tickerCache = new NodeCache();
let lastCacheUpdated = new Date().getTime();

/**
 * Method that checks if a ticker name is valid
 * @param {String} ticker
 * @returns
 */
function checkTickerSyntax(ticker) {
  if (!ticker) {
    return 'Ticker is required';
  }
  if (typeof ticker !== 'string') {
    return 'Ticker must be a string';
  }
  if (ticker.length === 0) {
    return 'Ticker must be a non-empty string';
  }
  return '';
}

let ws:WebSocket = null;

type StockPrice = {
  symbol: string;
  latestPrice: Ticker
  history: Ticker[];
}

type StockPriceEventState = {
  active: boolean,
  lastUpdated: number,
}

const stockPriceEventSlice = createSlice({
  name: 'stockPriceEvent',
  initialState: {
    active: false,
    lastUpdated: new Date().getTime(),
  } as StockPriceEventState,
  reducers: {
    // stockPriceReceived: (state, action: PayloadAction<StockPriceItem[]>) => {
    //   const data = action.payload;
    //
    //   for (const item of data){
    //     if (!state.data[item.symbol]){
    //       state.data[item.symbol] = {
    //         symbol: item.symbol,
    //         latestPrice: item,
    //         history: [],
    //       };
    //     }
    //     state.data[item.symbol].latestPrice = item;
    //     state.data[item.symbol].history.push(item);
    //     // only keep the last 10 items
    //     if (state.data[item.symbol].history.length > 100){
    //       state.data[item.symbol].history.shift();
    //     }
    //   }
    // },
    forceLastUpdateDateChange: (state) => {
      state.lastUpdated = new Date().getTime();
    },
    start: (state) => {
      if (ws && state.active === false){
        state.active = true;
      }
    },
    stop: (state) => {
      if (state.active){
        state.active = false;
      }
    },
    connect: () => {
      if (!ws){
        ws = new WebSocket('wss://streamer.finance.yahoo.com/?version=2');
        // eslint-disable-next-line no-console
        console.log('start');
        ws.onopen = () => {
          // eslint-disable-next-line no-console
          console.log('onopen: send subscribe', tickerCache.keys());
          ws.send(JSON.stringify({
            subscribe: tickerCache.keys(),
          }));
        };
        ws.onmessage = (message) => {
          const data = JSON.parse(message.data);

          const ticker = Ticker.deserialize(Buffer.from(data.message, 'base64'));
          if (tickerCache.has(ticker.id)) {
            const val = tickerCache.get(ticker.id) as StockPrice;

            if (ticker.exchange === 'LSE'){
              ticker.price = ticker.price / 100;
              ticker.change = ticker.change / 100;
              ticker.strikePrice = ticker.strikePrice / 100;
              ticker.openPrice = ticker.openPrice / 100;
              ticker.ask = ticker.ask / 100;
            }

            val.latestPrice = ticker;
            val.history.push(ticker);
            tickerCache.set(ticker.id, val);
          }
          lastCacheUpdated = new Date().getTime();
          // dispatch(stockPriceReceived(ticker));
          // console.log(ticker, ticker.price, ticker.id, ticker.change, ticker.changePercent, ticker.exchange, ticker.quoteType);
        };
      }
    },
    terminate: () => {
      if (ws){
        ws.close();
        ws = null;
      }
    },
    addTicker: (state, action: PayloadAction<string[]>) => {
      const symbols = action.payload;
      for (const symbol of symbols){
        const error = checkTickerSyntax(symbol);
        if (error){
          // eslint-disable-next-line no-console
          console.error(error);
          continue;
        }
        const obj:StockPrice = {
          symbol: symbol,
          latestPrice: null,
          history: [],
        };
        tickerCache.set(symbol, obj);
      }

      if (state.active && ws.readyState === ws.OPEN){
        // eslint-disable-next-line no-console
        console.log('add ticker: send subscribe', tickerCache.keys());
        ws.send(JSON.stringify({
          subscribe: tickerCache.keys(),
        }));
      }
    },
    removeTicker: (state, action: PayloadAction<string[]>) => {
      const symbols = action.payload;

      for (const symbol of symbols){
        tickerCache.del(symbol);
      }

      if (state.active && ws && ws.readyState === ws.OPEN){
        // eslint-disable-next-line no-console
        console.log('remove ticker: send subscribe', tickerCache.keys());
        ws.send(JSON.stringify({
          subscribe: tickerCache.keys(),
        }));
      }
    },
  },
});

export const selectLatestPrice = (state: any, symbol: string) => {
  const val = tickerCache.get(symbol) as StockPrice;
  return val?.latestPrice;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const selectLatestPrices = (state: any) => {
  return tickerCache.keys().map((key) => {
    return tickerCache.get(key) as StockPrice;
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const selectLastCacheUpdated = (state: any) => {
  return lastCacheUpdated;
};

export function connectStockPriceWatcher(){
  return stockPriceEventSlice.actions.connect();
}

export function terminateStockPriceWatcher(){
  return stockPriceEventSlice.actions.terminate();
}

export function startStockPriceWatcher(){
  return stockPriceEventSlice.actions.start();
}

export function stopStockPriceWatcher(){
  return stockPriceEventSlice.actions.stop();
}

export function addStockPriceTicker(symbols: string[]){
  return stockPriceEventSlice.actions.addTicker(symbols);
}

export function removeStockPriceTicker(symbols: string[]){
  return stockPriceEventSlice.actions.removeTicker(symbols);
}

export function forceLastUpdateDateChange(){
  return stockPriceEventSlice.actions.forceLastUpdateDateChange();
}

export function confirmSubscription(){
  if (ws && ws.readyState === ws.OPEN){
    ws.send(JSON.stringify({
      subscribe: tickerCache.keys(),
    }));
  }
}

export function getLastStockPriceUpdateTime(){
  return lastCacheUpdated;
}

export const stockPriceChangeReducer = stockPriceEventSlice.reducer;

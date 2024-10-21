import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {
  confirmSubscription,
  connectStockPriceWatcher,
  forceLastUpdateDateChange,
  getLastStockPriceUpdateTime,
} from './stock-price-change.reducer';

let lastForceUpdateTime = new Date().getTime();
let counter = 0;

export function useYahooFinanceStockPriceChangeChecker(delay = 1000){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectStockPriceWatcher());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastForceUpdateTime < getLastStockPriceUpdateTime()){
        lastForceUpdateTime = new Date().getTime();
        dispatch(forceLastUpdateDateChange());
        counter = (counter + 1) % 2000;
        if (counter === 0){
          confirmSubscription();
        }
      }
    }, delay);
    return () => {
      // eslint-disable-next-line no-console
      console.log('clear interval', interval);
      clearInterval(interval);
    };
  }, [dispatch, delay]);
}

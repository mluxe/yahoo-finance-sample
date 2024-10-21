import './stock-simulation-view.scss';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {StockSimulationCard} from './stock-simulation-card';
import {StockSelector} from './stock-selector';
import {addStockPriceTicker, useYahooFinanceStockPriceChangeChecker} from '../../../yahoo';

type StockPredictionViewProps = {

}

export function StockSimulationView(props: StockPredictionViewProps) {
  const [symbols, setSymbols] = useState<string[]>([]);
  const dispatch = useDispatch();

  useYahooFinanceStockPriceChangeChecker(500);

  useEffect(() => {
    const cachedSymbols = localStorage.getItem('stock-symbols');
    if (cachedSymbols){
      setSymbols(cachedSymbols.split(','));
    } else {
      setSymbols(['AAPL', 'SLB', 'GBPUSD=X']);
    }
  }, []);

  const signature = symbols.join(',');

  useEffect(() => {
    if (signature.length > 0) {
      const symbols = signature.split(',');
      dispatch(addStockPriceTicker(symbols));
    }
  }, [dispatch, signature]);

  const handleChange = (symbols: string[]) => {
    setSymbols(symbols);
    dispatch(addStockPriceTicker(symbols));
    console.log(symbols);
    localStorage.setItem('stock-symbols', symbols.join(','));
  };

  return (
    <div className='stock-simulation-view'>
      <div>
        <StockSelector symbols={symbols} onChange={handleChange}/>
      </div>
      <div className='stock-simulation-view-content'>
        {/*<YahooFinanceWebSocket/>*/}
        {symbols.map((symbol) => (
          <StockSimulationCard symbol={symbol} key={symbol}/>
        ))}
      </div>
    </div>
  );
}

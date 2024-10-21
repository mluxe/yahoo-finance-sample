import './stock-simulation-card.scss';
import {HighlightedNumber} from '../highlighted-number';
import {useSelector} from 'react-redux';
import {selectLatestPrice} from '../../../yahoo';
import {formatNumber, getDurationDisplayValue} from '../../../func';

type StockPredictionCardProps = {
  symbol: string;
}

export function StockSimulationCard(props: StockPredictionCardProps) {
  const {symbol} = props;

  const latestPrice = useSelector((state) => selectLatestPrice(state, symbol));


  // prepare data based on exchange rate and recent quote from database
  let latest_quote_price = 0;
  let latest_quote_date = null;

  if (latestPrice){
    latest_quote_price = latestPrice.price;
    latest_quote_date = new Date();
  }


  const duration = latest_quote_date ? (new Date().getTime() - latest_quote_date.getTime()) : 0;

  let durationDisplayValue = getDurationDisplayValue(duration);
  if (durationDisplayValue !== 'now') {
    durationDisplayValue = durationDisplayValue + ' ago';
  } else {
    durationDisplayValue = 'realtime';
  }

  const bid = latestPrice?.bid || 0;
  const bid_size = latestPrice?.bidSize || 0;
  const ask = latestPrice?.ask || 0;
  const ask_size = latestPrice?.askSize || 0;

  const objValue:{[key:string]: any} = latestPrice?.toObject() || {status: 'waiting....'};
  return (
    <div className='stock-simulation-card'>
      <h3 className='stock-simulation-card-title'>
        <div>
          <div>
            <a href={`https://finance.yahoo.com/quote/${symbol}`} target='yahoo-stock' rel='noreferrer'>
              {symbol}
            </a>
          </div>
          <div>
            <small style={{fontSize: '0.8rem', margin: '0.2rem 0 0 0'}}>Today</small>
          </div>
        </div>
        <div className='title-profit-loss'>
          <div>
            {formatNumber(latest_quote_price, 2)}
          </div>
          <div className='subtitle'>
          </div>
        </div>
        <div className='title-profit-loss-pct'>
          <div>
            <HighlightedNumber value={latestPrice?.change} suffix='%'/>
          </div>
          <div className='subtitle'>
            <HighlightedNumber value={latestPrice?.changePercent} suffix='%'/>
          </div>
        </div>
      </h3>
      <div className='stock-prediction-card-body'>
        <div>
          <div className='text-right small updated-since'>
            <div className='pull-left' hidden={bid_size + ask_size === 0}>
              bid: {bid} x {bid_size} | ask: {ask} x {ask_size}
              { bid > ask && <i className='fal fa-arrow-up text-success'></i> }
              { bid > ask && <i className='fal fa-arrow-down text-danger'></i> }
            </div>
            {durationDisplayValue}
          </div>
        </div>
        <div className='stock-info-table'>
          <table className='table table-sm'>
            <tbody>
              {Object.keys(objValue).map((key) => {
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{objValue[key]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

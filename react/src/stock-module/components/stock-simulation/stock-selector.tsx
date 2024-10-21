import {useState} from 'react';
import './stock-selector.scss';

type StockSelectorProps = {
  symbols: string[];
  onChange: (symbols: string[]) => void;
}


export function StockSelector(props: StockSelectorProps){
  const {symbols, onChange} = props;

  const [value, setValue] = useState('');

  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value){
      onChange([...symbols, value]);
      setValue('');
    }
  };

  const handleRemove = (symbol) => {
    onChange(symbols.filter((s) => s !== symbol));
  };

  return (
    <div className='form form-inline stock-selector'>
      <div className='form-group'>
        <label>Enter a Symbol</label>
        <input className='form-control form-control-sm' type='text' value={value} onChange={handleSelectChange} placeholder='Symbol'/>
        <input type='button' value='Add' onClick={handleClick}/>
      </div>
      <ul>
        {symbols.map((symbol) => (
          <li key={symbol}>
            {symbol} <i className='fa fa-trash' onClick={() => handleRemove(symbol)}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

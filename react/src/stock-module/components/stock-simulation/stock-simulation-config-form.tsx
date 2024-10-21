import {Stock} from '../../models/entities/stock';
import {useState} from 'react';

type StockSimulationConfigFormProps = {
  stock: Stock;
  onChange: (config: {quantity: number, bookCost: number}) => void;
}

export function StockSimulationConfigForm(props: StockSimulationConfigFormProps) {
  const {stock} = props;
  const [quantity, setQuantity] = useState(stock.quantity);
  const [avgPrice, setAvgPrice] = useState(stock.book_cost / stock.quantity);

  const handleChange = (e) => {
    let v = parseInt(e.target.value) || 0;
    // if v is less than 0, set it to 0
    v = v < 0? 0: v;
    setQuantity(v);
    const bookCost = v * quantity;
    props.onChange({quantity: v, bookCost: bookCost});
  };

  const handleAvgPriceChange = (e) => {
    const val = parseFloat(e.target.value);
    setAvgPrice(val);
    const bookCost = val * quantity;
    props.onChange({quantity: quantity, bookCost: bookCost});
  };

  return <div>
    <div className='form-group'>
      <label>Quantity</label>
      <input type={'number'} name={'quantity'} className='form-control form-control-sm' value={quantity}
        onChange={handleChange}/>
    </div>
    <div className='form-group'>
      <label>Purchased Avg Price</label>
      <input type={'number'} name={'avgPrice'} className='form-control form-control-sm' value={avgPrice}
        onChange={handleAvgPriceChange}/>
    </div>
  </div>;
}

import {formatNumber} from '../../func';

type HighlightedNumberProps = {
  value: number;
  decimal?: number;
  formatter?: (value: number, decimal: number) => string;
  prefix?: string;
  suffix?: string;
  className?: string;
  revert?: boolean;
  noColor?: boolean;
  sign?: boolean;
}

export function HighlightedNumber(props: HighlightedNumberProps) {
  const {value, decimal=2, formatter, prefix='', suffix='', className} = props;
  const {revert=false, noColor=false, sign=true} = props;
  const formattedValue = formatter? formatter(value, decimal): formatNumber(value, decimal);
  let text_color;
  if (revert){
    text_color = value > 0 ? 'text-danger' : 'text-success';
  } else {
    text_color = value > 0 ? 'text-success' : 'text-danger';
  }
  if (noColor){
    text_color = '';
  }
  let displayValue = `${formattedValue}${suffix}`;
  if (!noColor && sign){
    displayValue = value > 0 ? `+${displayValue}` : displayValue;
  }
  if (prefix){
    displayValue = `${prefix} ${displayValue}`;
  }

  if (value === 0){
    text_color = '';
    displayValue = '-';
  }
  return <span className={`${className} ${text_color}`}>{displayValue}</span>;
}

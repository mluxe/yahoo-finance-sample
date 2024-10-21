import {isDefined} from '../is-defined';
import {formatNumber} from './format-number';

export const getCurrencyDisplayValue = (value, symbol='$', defaultDecimal= 2) => {
  if (!isDefined(value)) {
    return '-';
  }
  return `${symbol} ${formatNumber(value, defaultDecimal)}`;
};

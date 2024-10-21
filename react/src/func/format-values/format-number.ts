/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/

import {isDefined} from '../is-defined';

export function formatNumber(number: number|string|undefined, decimal: number=0) {
  if (isDefined(decimal) && isNaN(decimal)) {
    throw new Error(
      `formatNumber(${number}, ${decimal}) - decimal param is not an number`,
    );
  }

  if (!isDefined(number)) {
    return '-';
  }

  if (number === undefined){
    return '-';
  }

  if (number.toString() === '') {
    return '-';
  }

  return parseFloat(number.toString()).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: isDefined(decimal) ? decimal : 10,
  });
}

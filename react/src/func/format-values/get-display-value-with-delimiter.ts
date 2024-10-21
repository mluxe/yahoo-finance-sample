/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/

import {isDefined} from '../is-defined';

export const getDisplayValueWithDelimiter = (values, delimiter = ';', defaultValue = '-') => {
  if (!isDefined(values)) {
    return defaultValue;
  }
  if (!Array.isArray(values)) {
    return values;
  }
  values = values || [];
  return values.join(delimiter);
};

export const getDisplayValueWithKeyDelimiter = (array, key, delimiter = ';', defaultValue = '-') => {
  if (!array.length) {
    return defaultValue;
  }

  const values = array.map(function(item) {
    return item[key];
  });

  return values.join(delimiter);
};

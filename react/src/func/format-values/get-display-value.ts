/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/

import {isDefined} from '../is-defined';

const convertBoolToString = (value) => {
  return value === true ? 'Yes' : 'No';
};

export const getDisplayValue = (value, defaultValue = '-') => {
  if (!isDefined(value)) {
    return defaultValue;
  }

  if (typeof (value) === 'boolean') {
    return convertBoolToString(value);
  }

  return value ?? defaultValue;
};

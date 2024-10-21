/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/


import {getDisplayValue} from './get-display-value';
import {isDefined} from 'class-validator';

export const getBooleanDisplayValue = (value) => {
  if (!isDefined(value)) {
    return getDisplayValue(value);
  }
  return value ? 'Yes' : 'No';
};

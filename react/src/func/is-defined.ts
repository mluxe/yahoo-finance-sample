/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/

export function isDefined(val) {
  return val !== null && val !== undefined;
}

export function isNotDefined(val) {
  return !isDefined(val);
}

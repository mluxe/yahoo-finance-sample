/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 01/06/2022, 22:12
 ******************************************************************************/


export function getEnumDisplayValue(enumDefinition, value){
  const keys = Object.keys(enumDefinition);

  return keys.find((k) => enumDefinition[k] === value);
}

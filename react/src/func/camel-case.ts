/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/

/** The below func will covert the string to camelCase*/
/** eg: MaterialType --> materialType */

export const camelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

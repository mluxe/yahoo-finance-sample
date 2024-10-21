/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/

/** The below func will covert the camelCase string to all lower case string seperated by dash */
/** eg: materialTypes --> material-types */

export const dashCase = (str) => {
  return str.replace(
    /[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,
    function(s, i) {
      return (i > 0 ? '-' : '') + s.toLowerCase();
    },
  );
};

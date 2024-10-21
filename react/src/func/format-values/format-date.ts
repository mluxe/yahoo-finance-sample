/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/
import moment from 'moment';

export function formatDate(dateString: string | Date | undefined, format = 'D MMM, HH:mm', defaultValue='-') {
  if (!dateString){
    return defaultValue;
  }
  const date = moment(dateString);
  return date.format(format);
}

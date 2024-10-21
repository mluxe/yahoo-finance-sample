/*
 * Copyright (c) 2023.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 05/11/2023, 17:36
 */


import moment from 'moment/moment';

export function getDateDisplayValue(date: string | Date | undefined, format = 'D MMM', defaultText='-'){
  if (!date){
    return defaultText;
  }

  let Cd: Date;
  if (typeof(date) === 'string'){
    Cd = new Date(Date.parse(date));
  } else {
    Cd = date;
  }

  return moment(Cd).format(format);
}

export function getDateTimeDisplayValue(date: string | Date | undefined, defaultText='-'){
  if (!date){
    return defaultText;
  }

  let Cd: Date;
  if (typeof(date) === 'string'){
    Cd = new Date(Date.parse(date));
  } else {
    Cd = date;
  }

  return `${Cd.toLocaleDateString()} ${Cd.toLocaleTimeString()}`;
}

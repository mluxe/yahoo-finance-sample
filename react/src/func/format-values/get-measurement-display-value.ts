/** *****************************************************************************
 * Copyright (c) 2022.  - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yufei Liu <feilfly@gmail.com>, 12/04/2022, 11:29
 ******************************************************************************/

import {isBlank} from '../is-blank';
import {isDefined} from '../is-defined';
import {formatNumber} from './format-number';

export function getMeasurementDisplayValue(val, unit, convertFunc, decimal, defaultValue = '-') {
  if (isBlank(val)) {
    return defaultValue;
  }
  if (isBlank(unit)) {
    return val;
  }
  let text;
  if (isDefined(val) && isDefined(unit)) {
    text = `${formatNumber(val, decimal)} ${unit}`;
    try {
      if (convertFunc !== undefined) {
        const convertedValue = convertFunc(val, unit);
        if (convertedValue.unit !== unit) {
          text = `${formatNumber(convertedValue.value, decimal)} ${
            convertedValue.unit
          } (${text})`;
        }
      }
    } catch (e) {
      // @ts-ignore
      // eslint-disable-next-line no-console
      console.warn(`No conversion unit found - ${val} ${unit} , ${e.message}`);
    }
  }
  return text;
}

// @ts-ignore
export function getMeasurementDisplayValueWithLimit(
  val: number, unit: string,
  convertFunc:(val:any, unit:string)=>any|null=() => null,
  decimal=2, limit=null) {
  let _val = val;
  let _unit = unit;
  if (isDefined(convertFunc)) {
    const convertedValue = convertFunc(val, unit);
    _val = convertedValue.value;
    _unit = convertedValue.unit;
  }

  // @ts-ignore
  if (isDefined(limit) && _val >= limit){
    return 'Any';
  }

  return getMeasurementDisplayValue(_val, _unit, null, decimal);
}

export function getDisplayValueForCalculatedMeasurement(
  val: number|string|undefined,
  unit: string,
  calculatedValue: number,
  calculatedValueUnit: string,
  decimal: number,
  defaultValue = '-',
) {
  if (!isDefined(val) || val === '') {
    return defaultValue;
  }
  if (!isDefined(unit)) {
    return val;
  }
  let calculatedDisplayValue = `${formatNumber(
    calculatedValue,
    decimal,
  )} ${calculatedValueUnit}`;
  if (unit !== calculatedValueUnit) {
    const userInputDisplayValue = `${formatNumber(val, decimal)} ${unit}`;
    calculatedDisplayValue = `${calculatedDisplayValue} (${userInputDisplayValue})`;
  }
  return calculatedDisplayValue;
}

/**
 *
 * @param min
 * @param max
 * @param nomOrUnit - nom value or unit string
 * @param unit - unit string
 * @param defaultValue - default value
 * @returns {string}
 */
export const getMeasurementRangeDisplayValue = (
  min: number,
  max: number,
  nomOrUnit:number|null|undefined|string = null,
  unit: undefined|string = undefined,
  defaultValue = '-',
): string => {
  // it allows us to call this method in this format
  // getMeasurementRangeDisplayValue(min, max, unit) or
  // getMeasurementRangeDisplayValue(min, max, nom, unit)

  let nom = nomOrUnit;

  // @ts-ignore
  if (isDefined(nomOrUnit) && isNaN(nomOrUnit)) {
    nom = null;
    // @ts-ignore
    unit = nomOrUnit;
  }

  unit = unit || '';
  if (min && max) {
    return `${min} - ${max} ${unit}`;
  }

  if (min || max) {
    return `${min ?? max}  ${unit}, ${min ? 'Min' : 'Max'}`;
  }

  if (nom) {
    return `${nom} ${unit}, Nom`;
  }

  return defaultValue;
};

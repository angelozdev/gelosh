import isArray from "./is-array";
import isBoolean from "./is-boolean";
import isNil from "./is-nil";
import isNumber from "./is-number";
import isObject from "./is-object";
import isString from "./is-string";

function isEmpty(value: any) {
  if (isNil(value)) return true;
  if (isArray(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  if (isString(value)) return value.length === 0;
  if (isNumber(value)) return value === 0 || value === "0";
  if (isBoolean(value)) return value === false;
  return false;
}

export default isEmpty;

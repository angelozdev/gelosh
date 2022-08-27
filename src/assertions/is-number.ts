import isNil from "./is-nil";

function isNumber(value: any) {
  if (isNil(value)) return false;
  if (isNaN(value)) return false;
  return value.constructor === Number || value.constructor === String;
}

export default isNumber;

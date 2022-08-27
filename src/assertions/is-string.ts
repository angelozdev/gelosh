import isNil from "./is-nil";

function isString(value: any) {
  if (isNil(value)) return false;
  return value.constructor === String;
}

export default isString;

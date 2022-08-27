import isNil from "./is-nil";

function isBoolean(value: any) {
  if (isNil(value)) return false;
  return value.constructor === Boolean;
}

export default isBoolean;

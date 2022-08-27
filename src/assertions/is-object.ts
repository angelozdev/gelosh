function isObject(value: any) {
  return !!value && value.constructor === Object;
}

export default isObject;

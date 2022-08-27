function isFunction(value: any) {
  return !!value && value.constructor === Function;
}

export default isFunction;

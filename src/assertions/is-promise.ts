function isPromise(value: any) {
  return !!value && value.constructor === Promise;
}

export default isPromise;

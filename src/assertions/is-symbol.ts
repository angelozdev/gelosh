function isSymbol(value: any) {
  return !!value && value.constructor === Symbol;
}

export default isSymbol;

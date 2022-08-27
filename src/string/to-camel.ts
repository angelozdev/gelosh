function toCamel(string: string) {
  return string
    .replace(/^[\s\.\-\_]/g, "")
    .replace(/(^[A-Z])/g, (match) => `${match.toLowerCase()}`)
    .replace(/[\s\.\-\_]([a-z])/g, (match) => `${match.toUpperCase()}`)
    .replace(/[\s\.\-\_]/g, "");
}

export default toCamel;

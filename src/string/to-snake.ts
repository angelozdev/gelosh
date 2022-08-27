function toSnake(string: string) {
  return string
    .replace(/([A-Z\s\-\.])/g, (match) => `_${match.toLowerCase()}`)
    .replace(/[\s\.\-]/g, "")
    .replace(/^_/, "")
    .replace(/_$/, "");
}

export default toSnake;

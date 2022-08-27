import isSymbol from "../is-symbol";

describe("isSymbol", () => {
  test.each([
    "string",
    {},
    () => {},
    false,
    true,
    [],
    123213,
    0,
    undefined,
    null,
    Promise.resolve(),
  ])("returns false for %p", (value) => {
    expect(isSymbol(value)).toBe(false);
  });

  test("returns true for symbol", () => {
    const symbol = Symbol("test");
    expect(isSymbol(symbol)).toBe(true);
  });
});

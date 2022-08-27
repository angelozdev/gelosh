import isString from "../is-string";

describe("isString", () => {
  test("returns true for a string", () => {
    expect(isString("hello")).toBe(true);
  });

  test("returns true for empty string", () => {
    expect(isString("")).toBe(true);
  });

  test.each([
    Symbol,
    () => {},
    [],
    true,
    false,
    0,
    1,
    {},
    undefined,
    null,
    Promise.resolve(),
  ])("returns false for %p", (value) => {
    expect(isString(value)).toBe(false);
  });
});

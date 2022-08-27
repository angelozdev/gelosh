import isArray from "../is-array";

describe("isArray", () => {
  test.each([
    "string",
    {},
    Symbol,
    () => {},
    false,
    true,
    12,
    0,
    undefined,
    null,
    Promise.resolve(),
  ])("returns false for %p", (value) => {
    expect(isArray(value)).toBe(false);
  });

  test("returns true for a empty array", () => {
    expect(isArray([])).toBe(true);
  });

  test("returns true for a array with values", () => {
    expect(isArray([1, 2, 3, 0])).toBe(true);
  });
});

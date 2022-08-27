import isObject from "../is-object";

describe("isObject", () => {
  test.each([
    "string",
    () => {},
    false,
    true,
    [],
    Symbol,
    12,
    0,
    undefined,
    null,
    Promise.resolve(),
  ])("returns false for %p", (value) => {
    expect(isObject(value)).toBe(false);
  });

  test.each([{}, { object: true }])("returns true for %p", (obj) => {
    expect(isObject(obj)).toBe(true);
  });
});

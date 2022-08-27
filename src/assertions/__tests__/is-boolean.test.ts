import isBoolean from "../is-boolean";

describe("isBoolean", () => {
  test.each([
    "string",
    {},
    () => {},
    [],
    Symbol,
    12,
    0,
    undefined,
    null,
    Promise.resolve(),
  ])("returns false for %p", (value) => {
    expect(isBoolean(value)).toBe(false);
  });

  test.each([true, false])("returns true for %p", (value) => {
    expect(isBoolean(value)).toBe(true);
  });
});

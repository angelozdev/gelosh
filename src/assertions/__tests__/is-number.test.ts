import isNumber from "../is-number";

describe("isNumber", () => {
  test.each([
    "String",
    () => {},
    [],
    {},
    false,
    true,
    undefined,
    null,
    Promise.resolve(),
  ])("returns false for %p", (value) => {
    expect(isNumber(value)).toBe(false);
  });

  test.each(["123", 1231, 0, "0", 1.23, "1.233"])(
    "returns true for %p",
    (value) => {
      expect(isNumber(value)).toBe(true);
    }
  );
});

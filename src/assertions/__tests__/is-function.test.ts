import isFunction from "../is-function";

describe("isFunction", () => {
  test.each([() => {}, Symbol, function func() {}])(
    "should return true if value is %p",
    (func) => {
      expect(isFunction(func)).toBe(true);
    }
  );

  test.each([
    "String",
    {},
    true,
    false,
    213,
    0,
    undefined,
    null,
    Promise.resolve(),
  ])("should return false if value is %p", (value) => {
    expect(isFunction(value)).toBe(false);
  });
});

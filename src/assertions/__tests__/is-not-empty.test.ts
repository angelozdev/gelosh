import isNotEmpty from "../is-not-empty";

describe("isNotEmpty", () => {
  test.each(["", {}, [], 0, undefined, null, false])(
    "returns false for %p",
    (value) => {
      expect(isNotEmpty(value)).toBe(false);
    }
  );

  test.each([
    [1, 2, 3],
    { a: 1, b: 2 },
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, c: 3, d: 4 },
    "hello",
    123,
    true,
    () => {},
    Symbol,
  ])("returns true for %p", (value) => {
    expect(isNotEmpty(value)).toBe(true);
  });
});

import isEmpty from "../is-empty";

describe("isEmpty", () => {
  test.each(["", {}, [], 0, undefined, null, false])(
    "returns true for %p",
    (value) => {
      expect(isEmpty(value)).toBe(true);
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
  ])("returns false for %p", (value) => {
    expect(isEmpty(value)).toBe(false);
  });
});

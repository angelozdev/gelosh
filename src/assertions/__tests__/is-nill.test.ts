import isNil from "../is-nil";

describe("isNil", () => {
  test.each(["string", {}, () => {}, [], Symbol, 12, 0])(
    "returns false for %p",
    (value) => {
      expect(isNil(value)).toBe(false);
    }
  );

  test.each([undefined, null])("returns true for %p", (value) => {
    expect(isNil(value)).toBe(true);
  });
});

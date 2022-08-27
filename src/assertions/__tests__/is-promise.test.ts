import { isPromise } from "util/types";

describe("isPromise", () => {
  test.each(["string", {}, () => {}, [], Symbol, 12, 0, undefined, null])(
    "returns false for %p",
    (value) => {
      expect(isPromise(value)).toBe(false);
    }
  );

  test("returns true for promise", () => {
    expect(isPromise(Promise.resolve())).toBe(true);
  });
});

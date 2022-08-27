import toSnake from "../to-snake";

describe("toSnake", () => {
  it("converts a camelCase string to snake_case", () => {
    expect(toSnake("camelCase")).toBe("camel_case");
  });

  it("converts a PascalCase string to snake_case", () => {
    expect(toSnake("PascalCase")).toBe("pascal_case");
  });

  it("converts a kebab-case string to snake_case", () => {
    expect(toSnake("kebab-case")).toBe("kebab_case");
  });

  it("converts a snake_case string to snake_case", () => {
    expect(toSnake("snake_case")).toBe("snake_case");
  });

  it("should return an empty sring", () => {
    expect(toSnake("")).toBe("");
  });

  it("should return a string without spaces", () => {
    expect(toSnake("hello world")).toBe("hello_world");
  });

  it("should return a string without special characters", () => {
    expect(toSnake("hello.world")).toBe("hello_world");
  });

  it("should return a string without leading underscore", () => {
    expect(toSnake("_hello")).toBe("hello");
  });

  it("should return a string without trailing underscore", () => {
    expect(toSnake("hello_")).toBe("hello");
  });

  it("should return a string without leading and trailing underscores", () => {
    expect(toSnake("_hello_")).toBe("hello");
  });

  it("should return a string without leading and trailing spaces", () => {
    expect(toSnake(" hello ")).toBe("hello");
  });
});

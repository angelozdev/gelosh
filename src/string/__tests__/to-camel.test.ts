import toCamel from "../to-camel";

describe("toCamel", () => {
  it("converts a camelCase string to camelCase", () => {
    expect(toCamel("camelCase")).toBe("camelCase");
  });

  it("converts a PascalCase string to camelCase", () => {
    expect(toCamel("PascalCase")).toBe("pascalCase");
  });

  it("converts a kebab-case string to camelCase", () => {
    expect(toCamel("kebab-case")).toBe("kebabCase");
  });

  it("converts a snake_case string to camelCase", () => {
    expect(toCamel("snake_case")).toBe("snakeCase");
  });

  it("should return an empty sring", () => {
    expect(toCamel("")).toBe("");
  });

  it("should return a string without spaces", () => {
    expect(toCamel("hello world")).toBe("helloWorld");
  });

  it("should return a string without special characters", () => {
    expect(toCamel("hello.world")).toBe("helloWorld");
  });

  it("should return a string without leading underscore", () => {
    expect(toCamel("_hello")).toBe("hello");
  });

  it("should return a string without trailing underscore", () => {
    expect(toCamel("hello_")).toBe("hello");
  });

  it("should return a string without leading and trailing underscores", () => {
    expect(toCamel("_hello_")).toBe("hello");
  });

  it("should return a string without leading and trailing spaces", () => {
    expect(toCamel(" hello ")).toBe("hello");
  });
});

import { capitalize } from "../scripts/capitalize.js";

test("Capitalize the first letter of a single word", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("Hello")).toBe("Hello");
});

test("Capitalize a single letter", () => {
  expect(capitalize("A")).toBe("A");
  expect(capitalize("a")).toBe("A");
});

test("Properly handle an empty string", () => {
  expect(capitalize("")).toBe("");
});

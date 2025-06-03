import { reverseString } from "../scripts/reverseString.js";

test("Properly reverse a one word string", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Properly reverse a multi-word string", () => {
  expect(reverseString("I like coding.")).toBe(".gnidoc ekil I");
});

test("Properly handle an empty string", () => {
  expect(reverseString("")).toBe("");
});

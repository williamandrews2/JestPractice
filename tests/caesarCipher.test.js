import { caesarCipher } from "../scripts/caesarCipher.js";

test("Properly cipher text with wrap around if necessary", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Properly handle different letter cases", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Properly handle and preserve punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

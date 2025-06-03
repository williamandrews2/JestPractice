import { Calculator } from "../scripts/calculator.js";

describe("add", () => {
  const calc = new Calculator();

  test("Properly add two number together", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("Add a negative number", () => {
    expect(calc.add(2, -3)).toBe(-1);
  });
});

describe("subtract", () => {
  const calc = new Calculator();

  test("Properly subtract two numbers", () => {
    expect(calc.subtract(7, 5)).toBe(2);
  });

  test("Properly subtrac a negative number", () => {
    expect(calc.subtract(5, -3)).toBe(8);
  });
});

describe("multiply", () => {
  const calc = new Calculator();

  test("Properly multiply two numbers", () => {
    expect(calc.multiply(3, 4)).toBe(12);
  });

  test("Properly multiply a number by zero", () => {
    expect(calc.multiply(9, 0)).toBe(0);
  });

  test("Properly muliply negative numbers", () => {
    expect(calc.multiply(-9, -3)).toBe(27);
  });
});

describe("divide", () => {
  const calc = new Calculator();

  test("Properly divide two numbers with a decimal result.", () => {
    expect(calc.divide(5, 4)).toBe(1.25);
  });

  test("Properly handle a divide by zero scenario.", () => {
    expect(calc.divide(5, 0)).toBe(null);
  });
});

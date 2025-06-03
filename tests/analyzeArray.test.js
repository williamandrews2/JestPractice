import { analyzeArray } from "../scripts/analyzeArray.js";

test("Properly analyze a populated array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Properly analyze an empty array", () => {
  expect(analyzeArray([])).toEqual(null);
});

test("Properly analyze an array with one element", () => {
  expect(analyzeArray([8])).toEqual({
    average: 8,
    min: 8,
    max: 8,
    length: 1,
  });
});

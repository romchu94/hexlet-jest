import getFunction from "./functions.js";

const without = getFunction();

test("without - basic functionality and duplicates", () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
});

test("without - returns empty array when all elements excluded", () => {
  expect(without([1, 1], 1)).toEqual([]);
});

test("without - empty array", () => {
  expect(without([], 1, 2)).toEqual([]);
});

test("without - no values to exclude", () => {
  expect(without([1, 2, 3])).toEqual([1, 2, 3]);
});

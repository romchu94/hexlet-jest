import getFunction from "./functions.js";

const gt = getFunction();

test("number is greater than specified", () => {
  expect(gt(3, 1)).toBe(true);
});

test("check for greater than or equal to", () => {
  expect(gt(3, 3)).toBe(false);
});

test("number is less than specified", () => {
  expect(gt(1, 3)).toBe(false);
});

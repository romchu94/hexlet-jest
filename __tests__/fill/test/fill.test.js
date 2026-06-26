import getImplementation from "../implementations/functions.js";

const fill = getImplementation();

test("original example", () => {
  const array = [1, 2, 3, 4];
  fill(array, "*", 1, 3);
  expect(array).toEqual([1, "*", "*", 4]);
});

test("parameters are not being passed", () => {
  const array = [1, 2, 3, 4];
  fill(array, "*");
  expect(array).toEqual(["*", "*", "*", "*"]);
});

test("only the start is passed as an argument", () => {
  const array = [1, 2, 3, 4];
  fill(array, "*", 4);
  expect(array).toEqual([1, 2, 3, 4]);
});

test("only the start is passed as an argument", () => {
  const array = [1, 2, 3, 4];
  fill(array, "*", 0, 10);
  expect(array).toEqual(["*", "*", "*", "*"]);
});

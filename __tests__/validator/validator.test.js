import { isNumber } from "es-toolkit/compat";

import getImplementation from "./implementations/index.js";

const makeValidator = getImplementation();

test("validator - default state", () => {
  const validator = makeValidator();
  expect(validator.isValid("some value")).toBe(true);
});

test("validator - cheks chaining", () => {
  const validator = makeValidator();

  validator.addCheck((v) => isNumber(v));
  expect(validator.isValid(5)).toBe(true);
  expect(validator.isValid("string")).toBe(false);

  validator.addCheck((v) => v > 10);
  expect(validator.isValid(15)).toBe(true);
  expect(validator.isValid(5)).toBe(false);
  expect(validator.isValid("20")).toBe(false);
});

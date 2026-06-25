import { cloneDeep } from "es-toolkit/compat";

import getFunction from "./functions.js";

const set = getFunction();

const baseObject = {
  a: [{ b: { c: 3 } }],
};
let object;

beforeEach(() => {
  object = cloneDeep(baseObject);
});
test("set - basic string path", () => {
  set(object, "a[0].b.c", 4);
  expect(object).toEqual({
    a: [{ b: { c: 4 } }],
  });
});

test("set - array path and new property", () => {
  set(object, ["x", "0", "y", "z"], 5);
  expect(object).toEqual({
    a: [{ b: { c: 3 } }],
    x: [{ y: { z: 5 } }],
  });
});

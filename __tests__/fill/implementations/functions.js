import { fill } from "es-toolkit/compat";
// @ts-check

import usersFill from "../fill";

const functions = {
  userVersion: usersFill,
  right: fill,
  wrong1: (coll, value, start = 1, end = coll.length) =>
    fill(coll, value, start, end),
  wrong2: (coll, value, start = 0, end = coll.length) => {
    if (start >= coll.length) {
      coll[start] = value;
    } else {
      fill(coll, value, start, end);
    }
    return coll;
  },
  wrong3: (coll, value, start = 0, end = coll.length) => {
    if (start >= end) {
      coll[end] = value;
    } else {
      fill(coll, value, start, end);
    }
    return coll;
  },
};

export default () => {
  const name = process.env.FUNCTION_VERSION || "userVersion";
  return functions[name];
};

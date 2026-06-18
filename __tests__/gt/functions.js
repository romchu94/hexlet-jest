import { gt, gte } from "es-toolkit/compat";
// @ts-check

const functions = {
  right: gt,
  wrong1: gte,
  wrong2: (a, b) => a !== b,
  wrong3: () => false,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || "right";
  return functions[name];
};

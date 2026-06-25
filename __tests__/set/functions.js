import { get, set } from "es-toolkit/compat";

const functions = {
  right1: set,
  wrong1: (obj, path, value) => {
    set(obj, path, value);
    obj.key = "value";
    return obj;
  },
  wrong2: (obj, path, value) => {
    obj[path] = value;
    return obj;
  },
  wrong3: (obj, path, value) => {
    if (get(obj, path) !== undefined) {
      set(obj, path, value);
    }
    return obj;
  },
};

export default () => {
  const name = process.env.FUNCTION_VERSION || "right1";
  return functions[name];
};

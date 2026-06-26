import right1 from "./getDaysInMonth.js";
import wrong1 from "./wrong1.js";
import wrong2 from "./wrong2.js";
import wrong3 from "./wrong3.js";
import wrong4 from "./wrong4.js";

const implementations = {
  right1,
  wrong1,
  wrong2,
  wrong3,
  wrong4,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || "right1";
  return implementations[name];
};

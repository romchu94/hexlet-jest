import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import getFunction from "../functions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toHtmlList = getFunction();

// BEGIN (write your solution here)
const expectedHtmlPath = path.join(
  __dirname,
  "..",
  "__fixtures__",
  "result.html",
);
const expectedHtml = fs.readFileSync(expectedHtmlPath, "utf-8");
test.each([["list.json"], ["list.yml"], ["list.csv"]])(
  "convert %s to HTML list",
  (filename) => {
    const fixturePath = path.join(__dirname, "..", "__fixtures__", filename);
    const result = toHtmlList(fixturePath);
    expect(result.trim()).toBe(expectedHtml.trim());
  },
);
// END

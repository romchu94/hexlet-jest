import getImplementation from "./implementations/index.js";

const getDaysInMonth = getImplementation();

test("testing function getDaysInMonth()", () => {
  expect(getDaysInMonth(4, 2023)).toBe(30);
});

test("check for 0 and 13", () => {
  expect(getDaysInMonth(0, 2023)).toBeNull();
  expect(getDaysInMonth(13, 2023)).toBeNull();
});

test("check February days", () => {
  expect(getDaysInMonth(2, 2023)).toBe(28);
  expect(getDaysInMonth(2, 2024)).toBe(29);
});
test("check for a 30-day month", () => {
  expect(getDaysInMonth(1, 2023)).toBe(31);
  expect(getDaysInMonth(12, 2023)).toBe(31);
});

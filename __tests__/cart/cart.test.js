import getImplementations from "./implementations/index.js";

const makeCart = getImplementations();

describe("cart", () => {
  let cart;
  beforeEach(() => {
    cart = makeCart();
  });
  test("should be empty by default", () => {
    (expect(cart.getItems()).toEqual([]),
      expect(cart.getCost()).toBe(0),
      expect(cart.getCount()).toBe(0));
  });
  test("should add items and calculate values", () => {
    const product = { name: "car", price: 3 };
    cart.addItem(product, 2);
    expect(cart.getCount()).toBe(2);
    expect(cart.getCost()).toBe(6);
    expect(cart.getItems()).toEqual([{ product, count: 2 }]);
  });
  test("should handle adding the same item multiple times", () => {
    const product = { name: "car", price: 3 };

    cart.addItem(product, 2);
    cart.addItem(product, 3);

    expect(cart.getCount()).toBe(5);
    expect(cart.getCost()).toBe(15);
  });
});

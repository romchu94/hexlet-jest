import { sumBy } from "es-toolkit/compat";
// @ts-check

export default () => ({
  items: [],
  addItem(product, count) {
    this.items.push({ product, count });
  },
  getItems() {
    return this.items;
  },
  getCount() {
    return sumBy(this.items, (item) => item.count);
  },
  getCost() {
    return sumBy(this.items, (item) => item.product.price);
  },
});

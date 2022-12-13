import { Product } from "./products";
interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: `motor`, price: 10 }, quantity: 10 },
  { product: { name: `sensor`, price: 12.5 }, quantity: 4 },
  { product: { name: `LED`, price: 1 }, quantity: 20 },
];

function calcInventoryValue(array: InventoryItem[]): number {
  let result = 0;
  for (let item of array) {
    result += item.product.price * item.quantity;
  }
  return result;
}
export {calcInventoryValue}
console.log(calcInventoryValue(inventory));

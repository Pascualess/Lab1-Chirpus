interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: `milk`, price: 3 },
  { name: `cheese`, price: 1.99 },
  { name: `eggs`, price: 0.99 },
  { name: `bacon`, price: 7.99 },
];
let testArray:any = []

function calcAverageProductPrice(array: Product[]): number {
    let result:number = 0
    if (array.length === 0){
        return 0
    }
    for (let item of array){
        result += item.price
    }
    return result / array.length
}

console.log(calcAverageProductPrice(testArray))

export {Product, calcAverageProductPrice}
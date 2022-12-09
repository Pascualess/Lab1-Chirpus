interface Mountain {
  name: string;
  height: number;
}

let newMountain: Mountain = {
  name: `Killaminjaro`,
  height: 10000,
};

let mountains: Mountain[] = [
  { name: `Kilimanjaro`, height: 19341 },
  { name: `Everest`, height: 29029 },
  { name: `Denali`, height: 20310 },
];

function findNameOfTallestMountain(array:Mountain[]) : string {
let result:string = ``
let newheight:number = 0
for (let item of array){
    if(item.height > newheight){
        newheight = item.height
        result = item.name
    }
}
return result
}

//let tallestMountain = mountains.reduce((prev, current) => (prev.height > current.height) ? prev : current);
//    return tallestMountain.name;


console.log(findNameOfTallestMountain(mountains))

export {findNameOfTallestMountain, Mountain}


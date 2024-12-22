let a = {
  b: 10,
};

// cant add new keys
a = {
  b: 12,
  // c:10
};

// cant add new keys
// a.c = 10;

// cant assign string
// a.b = "1"

let arr = [1, 2, 3];

arr.push(1); // works
// arr.push("1")  // error

let arr2 = [1, 2, 3, "3"];

arr2.push(1); // works
arr2.push("1"); // error

let temp1 = "1";
// temp1 = 10; // error

let nullTemp: null = null;

type FT = (a: string) => number;

const tempFun = (a: string) => {
  return 1;
};
tempFun("1");

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
Direction.Up; // 0
Direction.Down; // 1
Direction.Left; // 2

enum Direction2 {
  Up = 10,
  Down,
  Left,
  Right,
}
Direction2.Up; // 10
Direction2.Right; // 13

// any
let tempUn;

tempUn = 10;
tempUn = "s";

let tempUnd: undefined = undefined;
// tempUnd = null;   // error
// tempUnd = 10;  // error
// tempUnd = undefined // only work

// function tempLive(x?: number | null) {
//     // No error
//     console.log(x!.toFixed());
//   }

function tempLive(x?: number | null) {
  // No error
  console.log(x?.toFixed());
}
tempLive(0); // "0"
tempLive(null); // "undefined"
tempLive(undefined); // "undefined"


const arrT = [1,2,3];
arr.push(1)

// arrT is not const, so to make it work really like const we can write as 
const arrC = [1,2,3] as const;
// arrC.push(10)   // error


let obj1 = new Map()
obj1.set("a",10)

for (let [key,value] of obj1){

}

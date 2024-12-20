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

let obj1 = {};
// no error
obj1 = [];
obj1 = "1";
obj1 = 1;
obj1 = ()=>{}


// error
obj1 = null;
obj1 = undefined;
obj1.a = 10;

let obj2: {} = {};

// no error
obj2 = [];
obj2 = "1";
obj2 = 1;
obj2 = ()=>{}

// error
obj1.a = 10;

// no error
let obj3: object = {};

obj3 = []; // works
obj3 = () => {} ; 
obj3 = (a:number) => a ; 


// error
obj3 = null;
obj3 = "1";
obj3 = 1;
obj3.a = 10;



type fnType = ;
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

let temp: string | number = "a";
temp = 10;



function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }


  let x: "hello" = "hello";
// OK
x = "hello";
// ...
// x = "howdy";  //error

let operation : "add" | "sub" | "mul" | "div" = "add"


const temp2 = (a:number) : number | "no input" => {

    if(a){
        return a
    }else{
       return "no input"
    }

}

function handleError(errmsg: string): never{
    throw new Error(errmsg) ;
    }


type User = {
    readonly _id : number, 
    name : string,
    email : string,
    abc():void,
    // qwer(a:number):number
}

let user1 : User = {
    _id: 1101,
    name :"p",
    email : "p@g.com",
    abc : ()=>{}
}

// can edit
user1.name = "par";
user1.email = "par@g.com"

// cant edit 
// user1._id  = 101 // error


const abc : (number| string | boolean)[] = [1,2,"3",false]


type T1 = {
    name : String
}

type T2 = {
    email:  String
}

type T3 = {
    readonly _id : number
}

type unionType = T1 & T2 & T3


type Tuples = [number, string, boolean]

let tempT : Tuples = [1,"a",true]

tempT.push(10) // works
// same for pop, slice & other array function



function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }
  // 'a' gets value [10, 20, 30, 40]
  const a = multiply(10, 1, 2, 3, 4);

  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle = Colorful & Circle;


  interface Box<Type> {
    contents: Type;
  }
   
  interface Apple {
    // ....
  }
   
  // Same as '{ contents: Apple }'.
  type AppleBox = Box<Apple>;

  const date : Date = new Date();

  let b = 10;
//   b = "a"


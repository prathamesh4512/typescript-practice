
let obj1 = {};
// no error
obj1 = [];
obj1 = "1";
obj1 = 1;
obj1 = ()=>{}
obj1 = {a:10}
obj1 = {b:10}


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
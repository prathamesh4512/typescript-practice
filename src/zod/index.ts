import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
mySchema.parse("tuna"); // => "tuna"
mySchema.parse(12); // => throws ZodError

// "safe" parsing (doesn't throw error if validation fails)
const validateData1 = mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
const validateData2 = mySchema.safeParse(12); // => { success: false; error: ZodError }

if(validateData2.success){
     console.log(validateData2.data)
}else{
    console.log(validateData2.error)
}

type User = {
    id : number,
    name : string,
    email : string
 }

type userWithoutEmail = Omit<User, "email">  // {id:number, name:string}
type userWithoutEmailName = Omit<User, "email" | "name">

type userEmail = Pick<User, "email">   // string
type userEmailName = Pick<User, "email"|"name">   // {email:string, name:string}


// primitive values
z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();

// empty types
z.undefined();
z.null();
z.void(); // accepts undefined

// catch-all types
// allows any value
z.any();
z.unknown();

// never type
// allows no values
z.never();


const datetime = z.string().datetime();

datetime.parse("2020-01-01T00:00:00Z"); // pass
datetime.parse("2020-01-01T00:00:00.123Z"); // pass
datetime.parse("2020-01-01T00:00:00.123456Z"); // pass (arbitrary precision)
datetime.parse("2020-01-01T00:00:00+02:00"); // fail (no offsets allowed)

const datetimeOffset = z.string().datetime({ offset: true });



z.number().gt(5);  // greater than
z.number().gte(5); // greater than equal to alias .min(5)
z.number().lt(5);
z.number().lte(5); // alias .max(5)


const schema = z.optional(z.string());  // type schema = string | undefined

schema.parse(undefined); // => returns undefined
type A = z.infer<typeof schema>; // string | undefined

const user = z.object({
    username: z.string().optional(),
  });
  type C = z.infer<typeof user>; // { username?: string | undefined };



  const E = z.string().nullable(); // equivalent to nullableString
  type E = z.infer<typeof E>; // string | null

  z.string().optional().array(); // (string | undefined)[]
  z.string().array().optional(); // string[] | undefined

  z.array(z.string().optional())



  
  type CatName = "miffy" | "boris" | "mordred";
 
interface CatInfo {
  age: number;
  breed: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
 

const newMap:Map<string,number> = new Map()
newMap.set("1",1)
// newMap.set(1,1)  // error



type KeyName = "miffy" | "boris" | "mordred";
type Obj1Type = Record<KeyName,number>


const myFunction = z.function();

type myFunction = z.infer<typeof myFunction>;
// => ()=>unknown


const myFunction2 = z
  .function()
  .args(z.string(), z.number()) // accepts an arbitrary number of arguments
  .returns(z.boolean());

type myFunctio2 = z.infer<typeof myFunction>;
// => (arg0: string, arg1: number)=>boolean

z.void() // for return type void
// primitive types

const exampleString: string = "Hello World";
const exampleNumber: number = 42;
const exampleBoolean: boolean = true;
const exampleNull: null = null;
const exampleUndefined: undefined = undefined;

// any -> should be avoided, is basically the same as using plain JavaScript for typesafety
let exampleAny: any = "Hello World";
exampleAny = 42;

// arrays & objects
const exampleArray: string[] = ["Hello", "World"];
const exampleArray2: Array<string> = new Array("Hello", "World"); // same as above
const exampleObject: object = { name: "Max" };
const exampleObject2: { name: string } = { name: "Max" }; // more specific object type -> the "shape" of the object as type annotation

// tuples
const exampleTuple: [string, number] = ["Hello", 42];

// enums
enum ExampleEnum {
  First,
  Second,
  Third,
}

// more complex types with type aliases

type ExampleType = string | number; // union type

// union types -> not to be confused with C/C++ unions
let exampleUnion: string | number = "Hello World"; // can be either string or number but nothing else
exampleUnion = 42;
// string unions for very strict string type checking
type ExampleStringUnion = "Hello" | "World"; // only "Hello" or "World" are allowed, not "Hello World"
let exampleStringUnion: ExampleStringUnion = "Hello";

// intersection types
type ExampleIntersection = { name: string } & { age: number }; // has to be an object with both name and age properties
const exampleIntersection: ExampleIntersection = { name: "Max", age: 30 };

// mapped types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = Readonly<Person>;
const exampleReadonlyPerson: ReadonlyPerson = { name: "Max", age: 30 };

// type guards
export function isPerson(obj: any): obj is Person {
  return "name" in obj;
}

const testObject = { name: "Max" };
if (isPerson(testObject)) {
  console.log(`${testObject.name} is a person with age ${testObject.age}`);
}

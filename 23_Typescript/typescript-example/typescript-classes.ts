interface NamedThing {
  name: string;
}

class Person implements NamedThing {
  public name: string;
  private _age: number;

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Greeter<T extends NamedThing> {
  constructor(private thingToGreet: T) {}

  public greet() {
    console.log(`Hello, ${this.thingToGreet.name}`);
  }
}

let person = new Person("Max", 30);
person.sayHello();

let namedThing = person as NamedThing;
console.log(namedThing.name);
namedThing.sayHello(); // Error: Property 'sayHello' does not exist on type 'NamedThing'.

let greeter = new Greeter(person);
greeter.greet();

greeter = new Greeter({ name: "Max" }); // Type 'Greeter<{ name: string; }>' is not assignable to type 'Greeter<Person>'.

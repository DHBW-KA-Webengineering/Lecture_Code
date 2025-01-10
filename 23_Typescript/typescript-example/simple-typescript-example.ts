let a: number = 1;
let b: number = 2;

function add(x: number, y: number): number {
  return x + y;
}
const result: number = add(a, b);
console.log(result);

function printMessage(message: string) {
  console.log(message);
}

printMessage(result);

// Typeinference
const result2 = add(10, 32);

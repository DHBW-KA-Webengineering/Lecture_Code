// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
const var1 = ["a", "b", "c"];
const var2 = { a: 1 };

function dynamicVariableTypes() {
  let a = 1;
  console.log(a, typeof a);
  a = "1";
  console.log(a, typeof a);
  a = {};
  console.log(a, typeof a);
}

function typeCoercion() {
  let a = 1;
  let b = "1";
  console.log(a == b);
  let c = a + b;
  console.log(c, typeof c);
  let d = a - b;
  console.log(d, typeof d);
  console.log(++a, ++b);
}

function functionArguments() {
  function add(a, b) {
    return a + b;
  }

  console.log(add(1, 2));
  console.log(add("1", "2"));
  console.log(add(undefined, 2));
  console.log(add(null, 2));
  console.log(var1 + var2);
}

console.log("Dynamic Variable Types examples");
dynamicVariableTypes();
console.log("\nType Coercion examples");
typeCoercion();
console.log("\nFunction Arguments examples");
functionArguments();

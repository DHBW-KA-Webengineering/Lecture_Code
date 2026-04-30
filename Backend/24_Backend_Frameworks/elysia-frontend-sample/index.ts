import { edenFetch } from "@elysiajs/eden";
import { type App } from "../elysia-sample/src/index";

//@ts-ignore
const fetch = edenFetch<App>("http://localhost:3000");

const { data: id } = await fetch("/typesafe-id-zod/:id", {
  params: {
    id: 42,
  },
});

console.log(id, typeof id);

const response = await fetch("/typesafe-id-zod/:id", {
  params: {
    // Type Error!
    id: "42",
  },
});

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25, email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
] as const;

const aliceCreated = await fetch("/users", {
  method: "POST",
  body: users[0],
});

const bobCreated = await fetch("/users", {
  method: "POST",
  body: users[1],
});

const charlieCreated = await fetch("/users", {
  method: "POST",
  // Type Error! Missing age property
  body: users[2],
});

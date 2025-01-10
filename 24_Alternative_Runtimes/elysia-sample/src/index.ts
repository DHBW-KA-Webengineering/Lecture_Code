import { Elysia, t } from "elysia";

const app = new Elysia()
  .get("/hello-world", () => "Hello Elysia")
  .get("/hello/:name", (context) => {
    console.log(context);
    return `Hello ${context.params.name}`;
  })
  .get("/better-hello/:name", ({ params: { name }, query: { and } }) => `Hello ${name} ${and ? `and ${and}` : ""}`)
  .get("/typesafe-path/:id", ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Number(),
    }),
  })
  .get("/typesafe-query", ({ query: { referrer } }) => referrer, {
    query: t.Object({
      referrer: t.String(),
    }),
  })
  .get("/stream", async function* () {
    yield "Hello ";
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause für 1 Sekunde
    yield "World!";
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

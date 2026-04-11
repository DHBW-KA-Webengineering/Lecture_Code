import index from "./index.html";
Bun.serve({
  port: 8000,
  routes: {
    "/": index,
  },
});

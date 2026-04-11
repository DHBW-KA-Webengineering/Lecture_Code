Bun.serve({
  port: 8000,
  routes: {
    "/api/status": new Response("OK"),
    "/api/users/:id": (req) => {
      return new Response(`Hello User ${req.params.id}!`);
    },
    "/api/posts": {
      GET: () => new Response("List posts"),
      POST: async (req) => {
        const body = await req.json();
        //@ts-ignore
        return Response.json({ created: true, ...body });
      },
    },
  },
  fetch(request) {
    return new Response("Not Found", { status: 404 });
  },
});

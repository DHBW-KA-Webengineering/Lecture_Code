// Fehlermeldung ohne Deno-Extension!
Deno.serve((_request: Request) => {
  return new Response("Hello, world!");
});

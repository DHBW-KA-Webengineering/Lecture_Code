// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express, { response } from "express";

const cache = new Map();
const app = express();

// Einfache Request-Logging Middleware
app.use((request, response, next) => {
  console.log(new Date(), request.socket.remoteAddress, request.method, request.url);
  next();
});
// Sehr einfache Caching Middleware
app.use("/:id", (request, response, next) => {
  if (cache.has(request.params.id)) {
    console.log("Cache hit");
    response.json(cache.get(request.params.id));
  } else {
    next();
  }
});

app.get("/:id", async (request, response) => {
  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${request.params.id}`);
  const responseJson = await apiResponse.json();
  cache.set(request.params.id, responseJson);
  response.json(responseJson);
});

app.listen(80);

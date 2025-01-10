// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";

const app = express();
app.get("/", (request, response) => {
  if ("status" in request.query) {
    response.status(parseInt(request.query.status));
  }
  response.send(`filter: ${request.query.filter || "kein Filter"}}`);
});
app.listen(80, () => {
  console.log("Server gestartet");
});

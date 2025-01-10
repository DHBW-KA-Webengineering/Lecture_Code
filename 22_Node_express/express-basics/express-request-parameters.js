// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";

const app = express();
app.get("/users/:userid/items/:itemid?", (request, response) => {
  let responseText = `Empfangene User-ID: ${request.params.userid}`;
  responseText += `\nEmpfangene Item-ID: ${request.params.itemid}`;
  response.send(responseText);
});
app.listen(80, () => {
  console.log("Server gestartet");
});

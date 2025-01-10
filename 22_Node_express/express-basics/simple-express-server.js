// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";

const app = express();
app.get("/", (request, response) => {
  response.send("Server funktioniert!");
});
app.listen(80, () => {
  console.log("Server gestartet");
});

// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";

const users = [
  { id: 1, name: "Max" },
  { id: 2, name: "Moritz" },
];

const app = express();
app.get("/users", (request, response) => {
  response.send(users);
});

app.listen(80, () => {
  console.log("Server gestartet");
});

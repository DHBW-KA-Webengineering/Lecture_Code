// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";

const app = express();
app.get(
  "/",
  (request, response, next) => {
    response.write("Antwort von erstem Handler\n");
    next();
  },
  (request, response) => {
    setTimeout(() => {
      response.write("Antwort von zweitem Handler");
      response.end();
    }, 1000);
  }
);
app.listen(80, () => {
  console.log("Server gestartet");
});

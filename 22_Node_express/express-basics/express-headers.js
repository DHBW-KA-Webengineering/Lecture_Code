// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";

const app = express();
app.get("/", (request, response) => {
  response.set("Content-Type", "text/plain");
  response.set({
    "Content-Language": "de-DE",
    "X-Powered-By": "Test-Server",
  });
  response.send("Plaintext-Antwort");
});
app.listen(80, () => {
  console.log("Server gestartet");
});

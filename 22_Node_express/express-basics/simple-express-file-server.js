// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";
import { fileURLToPath } from "url";

const folderPath = fileURLToPath(new URL(".", import.meta.url));
const app = express();
app.get("/", (request, response) => {
  response.sendFile("./index.html", { root: folderPath });
});
app.listen(80, () => {
  console.log("Server gestartet");
});

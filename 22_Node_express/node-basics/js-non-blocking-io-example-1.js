// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import * as fs from "fs";

if (process.argv.length !== 3) {
  console.log("Usage: node js-non-blocking-io-example-1.js <Alternative>");
  console.log("Alternative 1: Callback");
  console.log("Alternative 2: Synchron");
  console.log("Alternative 3: Promise");
  process.exit(1);
}

if (process.argv[2] === "1") {
  console.log("Start");

  fs.readFile("./test.txt", (error, data) => {
    console.log("Daten gelesen: ");
    console.log(data.toString());
  });

  console.log("Ende");
}

if (process.argv[2] === "2") {
  // Alternativ: synchroner Aufruf
  console.log("Start synchron");

  const data = fs.readFileSync("./test.txt");
  console.log("Daten synchron gelesen: ");
  console.log(data.toString());

  console.log("Ende synchron");
}

import { promises as fsPromises } from "fs";
if (process.argv[2] === "3") {
  // Alternativ: Promise-basierte API
  console.log("Start Promise");

  const dataPromise = fsPromises.readFile("./test.txt");
  console.log("Lesen im Hintergrund gestartet");
  const fileContent = await dataPromise;
  console.log("Daten mit Promise gelesen: ");
  console.log(fileContent.toString());

  console.log("Ende Promise");
}

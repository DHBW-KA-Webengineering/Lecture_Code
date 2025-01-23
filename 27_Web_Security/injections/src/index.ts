// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2025 Lukas Panni

import sqlite3 from "sqlite3";
import { open } from "sqlite";
import express from "express";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  //deliver index.html
  res.sendFile(__dirname + "/index.html");
});

app.get("/search", async (req, res) => {
  const client = await open({
    filename: "example-db.db",
    driver: sqlite3.Database,
  });

  const sqlQuery = `SELECT * FROM posts WHERE posts.title LIKE '%${req.query.query}%'`;
  console.log("Running SQL query", sqlQuery);
  try {
    const result = await client.all(sqlQuery);
    res.send(result);
  } catch (e) {
    res.status(500).send("Error: " + e);
  }
});

app.post("/post", async (req, res) => {
  const { title, text, author } = req.body;
  const client = await open({
    filename: "example-db.db",
    driver: sqlite3.Database,
  });

  const sqlInsert = `INSERT INTO posts (title, text, author) VALUES ('${title}', '${text}', '${author}')`;
  console.log("Running SQL query", sqlInsert);
  try {
    await client.run(sqlInsert);
    res.status(201).send(`Created post ${title}:\n${text}`);
  } catch (e) {
    res.status(500).send("Error: " + e);
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

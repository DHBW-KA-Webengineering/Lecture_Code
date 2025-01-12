// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2025 Lukas Panni
import express from "express";
export const router = express.Router();

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Lukas" },
  { id: 2, name: "Silas" },
];

router.get("/", (_, response) => {
  response.json(users);
});

router.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    response.json(user);
  } else {
    response.status(404).json({ message: "User not found" });
  }
});

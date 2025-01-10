// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";
export const router = express.Router();

router.get("/", (request, response) => {
  response.send([{ id: 1, name: "Lukas" }]);
});

router.get("/:id", (request, response) => {
  response.send({
    id: parseInt(request.params.id),
    name: "Lukas",
  });
});

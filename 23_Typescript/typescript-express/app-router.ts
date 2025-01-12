// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";
import { router as userRouter } from "./user-router";
import { router as pokeApiRouter } from "./poke-api-router";

const app = express();

app.use("/users", userRouter);
app.use("/poke-api", pokeApiRouter);

app.listen(80);

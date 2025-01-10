// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
import express from "express";
import { router as userRouter } from "./user-router.js";

const app = express();

app.use("/users", userRouter);

app.listen(80);

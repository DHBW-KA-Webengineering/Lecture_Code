"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2024 Lukas Panni
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./user-router");
const poke_api_router_1 = require("./poke-api-router");
const app = (0, express_1.default)();
app.use("/users", user_router_1.router);
app.use("/poke-api", poke_api_router_1.router);
app.listen(80);

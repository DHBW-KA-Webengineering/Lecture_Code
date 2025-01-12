"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2025 Lukas Panni
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const users = [
    { id: 1, name: "Lukas" },
    { id: 2, name: "Silas" },
];
exports.router.get("/", (_, response) => {
    response.json(users);
});
exports.router.get("/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
        response.json(user);
    }
    else {
        response.status(404).json({ message: "User not found" });
    }
});

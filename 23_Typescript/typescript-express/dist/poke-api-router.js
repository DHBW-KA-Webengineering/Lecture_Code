"use strict";
// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2025 Lukas Panni
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const cache_middleware_1 = require("./cache-middleware");
exports.router = express_1.default.Router();
exports.router.use("/:id", (0, cache_middleware_1.createCacheMiddleware)({
    getCacheKey: (req) => `${req.params.id}`,
}));
exports.router.get("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const apiResponse = yield fetch(`https://pokeapi.co/api/v2/pokemon/${request.params.id}`);
    response.json(yield apiResponse.json());
}));

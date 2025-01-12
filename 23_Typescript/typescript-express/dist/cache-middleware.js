"use strict";
// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2025 Lukas Panni
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCacheMiddleware = void 0;
class Cache {
    constructor() {
        this.store = new Map();
    }
    get(key) {
        return this.store.get(key);
    }
    set(key, value) {
        this.store.set(key, value);
    }
}
const createCacheMiddleware = (options) => {
    var _a;
    const cache = new Cache();
    const getCacheKey = (_a = options.getCacheKey) !== null && _a !== void 0 ? _a : ((req) => req.originalUrl);
    return (req, res, next) => {
        const cacheKey = getCacheKey(req);
        const cachedResponse = cache.get(cacheKey);
        if (cachedResponse) {
            console.info(`Cache hit for key ${cacheKey}`);
            res.json(cachedResponse);
            return;
        }
        // Override the res.json method to cache the response
        const originalJson = res.json.bind(res);
        res.json = (body) => {
            console.info(`Cache miss for key ${cacheKey}, adding to cache`);
            cache.set(cacheKey, body);
            return originalJson(body);
        };
        next();
    };
};
exports.createCacheMiddleware = createCacheMiddleware;

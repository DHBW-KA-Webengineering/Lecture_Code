// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2025 Lukas Panni

import express, { type Request, type Response, type NextFunction } from "express";

type CacheKeyGenerator<P = {}> = (req: Request<P>) => string;

interface CacheMiddlewareOptions<P = {}> {
  getCacheKey?: CacheKeyGenerator<P>;
}

class Cache {
  private store: Map<string, any>;

  constructor() {
    this.store = new Map<string, any>();
  }

  get(key: string): any | undefined {
    return this.store.get(key);
  }

  set(key: string, value: any): void {
    this.store.set(key, value);
  }
}

export const createCacheMiddleware = <P = {}>(options: CacheMiddlewareOptions<P>): express.RequestHandler<P> => {
  const cache = new Cache();
  const getCacheKey = options.getCacheKey ?? ((req) => req.originalUrl);

  return (req: Request<P>, res: Response, next: NextFunction) => {
    const cacheKey = getCacheKey(req);
    const cachedResponse = cache.get(cacheKey);

    if (cachedResponse) {
      console.info(`Cache hit for key ${cacheKey}`);
      res.json(cachedResponse);
      return;
    }

    // Override the res.json method to cache the response
    const originalJson = res.json.bind(res);
    res.json = (body: any) => {
      console.info(`Cache miss for key ${cacheKey}, adding to cache`);
      cache.set(cacheKey, body);
      return originalJson(body);
    };

    next();
  };
};

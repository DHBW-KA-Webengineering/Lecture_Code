// SPDX-License-Identifier: MPL-2.0
// SPDX-FileCopyrightText: 2025 Lukas Panni

import express, { type Request } from "express";
import { createCacheMiddleware } from "./cache-middleware";

export const router = express.Router();

type GetPokemonParams = {
  id: string;
};

router.use(
  "/:id",
  createCacheMiddleware<GetPokemonParams>({
    getCacheKey: (req: Request<GetPokemonParams>) => `${req.params.id}`,
  })
);
router.get("/:id", async (request, response) => {
  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${request.params.id}`);
  response.json(await apiResponse.json());
});

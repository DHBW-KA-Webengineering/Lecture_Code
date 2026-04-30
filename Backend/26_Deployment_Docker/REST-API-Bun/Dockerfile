FROM oven/bun as build

COPY package.json bun.lockb /
RUN bun install --frozen-lockfile


FROM oven/bun as app
WORKDIR /app

COPY --from=build node_modules node_modules
COPY package.json src /app/

CMD ["bun", "run", "."]
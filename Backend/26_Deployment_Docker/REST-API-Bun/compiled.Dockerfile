FROM oven/bun as build

COPY . .
RUN bun install --frozen-lockfile
RUN bun build --compile./src/index.ts --outfile app

FROM alpine:latest as app

COPY --from=build app app

CMD ["app"]
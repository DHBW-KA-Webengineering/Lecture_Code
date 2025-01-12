FROM node:lts AS build

COPY package*.json .
RUN npm ci --only=production

FROM node:lts AS app

WORKDIR /app
COPY --from=build node_modules node_modules
COPY package.json src /app/

CMD ["node", "index.js"]
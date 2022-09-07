FROM node:alpine

WORKDIR /app
COPY package.json server.js ./

RUN npm i

CMD ["node", "server.js"]
FROM node
WORKDIR /bot
COPY package.json /bot/
COPY ./src /bot/src
COPY .env /bot/.env
RUN npm i
CMD ["npm run ./src/index.js"]
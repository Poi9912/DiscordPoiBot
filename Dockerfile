FROM node
WORKDIR /bot
COPY . /bot/
RUN npm i
CMD ["npm run start"]
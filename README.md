# PoiBot
## A personal discord bot 

This project have the base code for an interactive discord bot for your personal server using the V14 DiscordJS API.

## Features

- Modern event/command handling
- Moderation commands
- User inteactions as Gifs and message reactions

## Installation

You'll need [Node.js](https://nodejs.org/) v17+ to run.

After you have installed Node.js create an .env file.

```.env
TOKEN=Your bot token
ENVIROMENT=dev for development pdn for production
PREFIX=your prefix
SERVER=localhost
DOCKER=TRUE
OWNER=your discord user id
TESTSERVER=discord server id for testing porpuses only

```

Install the dependencies and devDependencies and start the bot.

```sh
npm i
npm start
```

For production environments...

```sh
npm i
NODE_ENV=production npm start
```

## Docker

With the Dockerfile included you can build your own image with the following commmand

```sh
docker build -t user/botname:${package.json.version} .
```

I recommend running the container with a *docker-compose.yaml*

```yaml
version: '3.9'
services:
  discordbot:
    build: .
    image: poibot:1.0
    environment:
      - TOKEN=Your bot token
      - ENVIROMENT=dev for development pdn for production
      - PREFIX=your prefix
      - SERVER=localhost
      - DOCKER=TRUE
      - OWNER=your discord user id
      - TESTSERVER=discord server id for testing porpuses only
```


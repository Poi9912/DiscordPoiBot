const {token,enviroment,prefix,server,docker} = require('./src/setup.js');
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "GuildMembers"
    ] 
});

let bot = {
    client,
    prefix:prefix||" ",
    owners:["312364871746322453"]
}

client.comands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./src/handlers/events")(bot, reload);
client.loadCommands = (bot,reload) => require("./src/handlers/commands")(bot,reload);

client.loadEvents(bot,false);
//client.loadCommands(bot,false);

module.exports = bot

client.login(token);


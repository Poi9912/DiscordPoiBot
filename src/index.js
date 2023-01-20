const {token,enviroment,prefix,server,docker} = require('./util/setup.js');
const { Client, Collection, Events, IntentsBitField } = require('discord.js');
const eventHandler = require('./handlers/eventHandler')
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

eventHandler(client);

client.login(token)
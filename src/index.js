import {token,enviroment,prefix,server,docker} from ('./setup.js');

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! from `);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === prefix||'ping') {
    await interaction.reply('poi poi pong?');
  }
});

client.login(token);
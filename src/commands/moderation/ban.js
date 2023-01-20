const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.exports = {
	name: 'ban',
    description: 'bans a memeber from a server',
    options: [
        {
            name: 'target-user',
            description: 'the user to ban',
            required:true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: 'reason',
            description: 'the reason for the ban',
            type: ApplicationCommandOptionType.String,
        }
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],
    callback: (client,interacion) => {
        interacion.reply(`user banned`)
    }
};
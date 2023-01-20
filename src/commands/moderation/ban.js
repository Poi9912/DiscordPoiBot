const { Client, Interaction, ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.exports = {
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interacion 
     */

    callback: async (client,interacion) => {
        const targetUserId = interacion.options.get('target-user').value
        const reason = interacion.options.get('reason')?.value ||'No reason';

        const targetUser = await interacion.guild.members.fetch(targetUserId);

        if(!targetUser){
            await interacion.editReply(`The user doesn't exist in this server`)
            return
        }

        if(targetUserId===interacion.guild.ownerId){
            await interacion.editReply(`You can't ban the server owner`)
            return
        }

        const targetUserRolePosition = targetUser.roles.highest.position
        const requestUserRolePosition = interacion.member.roles.highest.targetUserRolePosition
        const botRolePosition = interacion.guild.members.me.roles.highest.position

        if(targetUserRolePosition >= requestUserRolePosition){
            await interacion.editReply(`You can't ban a user with same or higher role than you`)
            return
        }
        
        if(targetUserRolePosition >= botRolePosition){
            await interacion.editReply(`You can't ban a user with same or higher role than the bot`)
            return
        }

        //baning user
        try {
            await targetUser.ban({reason})
            await interacion.editReply(`User ${targetUser} was banned\nReason: ${reason}`)
        } catch (error) {
            console.log('ERROR in ban command:')
            console.error(error)
        }

    },
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
    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers]
};
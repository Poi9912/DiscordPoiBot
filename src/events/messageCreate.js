const { MembershipScreeningFieldType } = require("discord.js")
const Discord = require("discord.js")
const { prefix, owners } = require("../..")

module.exports = {
    name:"messageCreate",
    run: async function runAll(bot,message){
        const {client} = bot
        if(!message.guild) return

        if(message.author.bot) return

        if(!message.content.startsWith(prefix))
            return

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.command.get(cmdstr)
        if (!command) return

        if(command.devOnly && owners.includes(memeber.id)){
            return message.reply("You don't have permission to run this command.")
        }

        if(command.permissions && memeber.permissions.missing(command.permissions).length != 0){
            return message.reply("You don't have permission to run this command.")
        }

        try {
            await command.run({...bot, message, args})
        } catch (error) {
            console.error(error)
        }
    }
}
const fs = require("fs")
const {getFiles} = require("../util/functions")

module.exports = (bot,reload) => {
    const {client} = bot
    fs.readFileSync(`./src/commands/`).forEach(category => {
        let commands = getFiles(`./src/commands/${category}`,".js")

        commands.forEach((f)=> {
            if (reload)
                delete require.cache[require.resolve(`../commands/${category}/${f}`)]
            const command = require(`./src/commands/${category}/${f}`)
            client.command.set(command.name, command)
        })

    });

    console.log(`Loaded ${client.commands.size} commands`)
}
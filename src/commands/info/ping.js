module.exports = {
    name:"ping",
    category:"info",
    permissions: [],
    devOnly: false,
    run: async({client, message, args}) => {
        message.reply("poi poi pong?")
    }
}
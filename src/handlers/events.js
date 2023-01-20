const {getFiles} = require ("../util/functions.js")

module.exports = (bot, reload) => {
    const {client} = bot
    
    let events = getFiles("./src/events/",".js")
    if (events.length==0){
        console.log("No events to load")
    }
    events.forEach((f,i)=>{
        if (reload){
            delete require.cache[require.resolve(`./src/events/${f}`)]
            
            const event = require(`./src/events/${f}`)
            client.events.set(event.name, event)
        }   
        else {
            console.log(`${i+1}. ${f} loaded`)
        }       

    })

    if (!reload){
        initEvents(bot);
    }

}

function triggerEventHandler(bot,event, ...args){
    const {client} = bot

    try {
        if (client.events.has(event)){
            client.events.get(event).run(bot, ...args)
        }
        else {
            throw new Error(`Event ${event} not aviable in events library.`)
        }
    } catch (error) {
        console.error(error)
    }
}

function initEvents(bot){
    const {client} = bot

    client.on("ready", () => {
        triggerEventHandler(bot, "ready")
    })

    client.on("messageCreate", () => {
        triggerEventHandler(bot, "messageCreate")
    })
}
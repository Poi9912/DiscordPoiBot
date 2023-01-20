const {enviroment,prefix,server,docker} = require('../../util/setup')
module.exports = (client) => {
    console.log(`User ${client.user.tag} is online from ${enviroment} enviroment, running from ${server} 
    with prefix ${prefix}.`)
    if(docker){
        console.log(`Running from docker instance true`)
    }
}
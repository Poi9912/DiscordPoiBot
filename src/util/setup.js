require('dotenv').config();

const token = process.env.TOKEN;
const enviroment = process.env.ENVIROMENT;
const prefix = process.env.PREFIX;
const server = process.env.SERVER;
const docker = process.env.DOCKER;
const owner = process.env.OWNER;
const testserver = process.env.TESTSERVER;

module.exports = {
	token,
	enviroment,
	prefix,
	server,
	docker,
	devs:[owner,],
	testserver
}

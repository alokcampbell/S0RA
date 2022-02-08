const Discord = require("discord.js");
global.webdict = require('webdict');
global.Commando = require('discord.js-commando');
global.path = require('path');
global.fs = require('fs')
global.ud = require('urban-dictionary');
global.RainbowSixApi = require('rainbowsix-api-node');
global.http = require('http')


// pull keys file
console.log('pulling keys...');
const keys = JSON.parse(fs.readFileSync('./keys/keys.json')); // read all keys

const TOKEN = keys.discordtoken;
const PREFIX = "!"

global.client = new Commando.Client({
	owner: '193066948240736257',
	commandPrefix: PREFIX,
	disableEveryone: true,
	unknownCommandResponse: true
});

client.registry.registerDefaultTypes()
    .registerGroups([
        ['general', 'general'], ['admin', 'admin'], ['utility', 'ult'], ['siege','r6s']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on("messsage", function (message) {
    console.log(message.content);
});

client.on("ready", function () {
    console.log("ready")
});

client.login(TOKEN).catch(console.log)


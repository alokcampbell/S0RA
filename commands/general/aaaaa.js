const {
	Command
} = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'aaaaaa',
			group: 'general',
			memberName: 'help me',
			description: 'refrence',
			examples: ['hello']
		});
	}
	async run(msg) {
		return msg.say('http://i.imgur.com/mMF65o6.gif');
	}
};
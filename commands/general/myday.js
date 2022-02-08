const {
	Command
} = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'myday',
			group: 'general',
			memberName: 'please',
			description: 'refrence',
			examples: ['hello']
		});
	}
	async run(msg) {
		return msg.say('http://i0.kym-cdn.com/photos/images/original/001/307/603/eca.png');
	}
};
const {
	Command
} = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'theythinkimcrazy',
			group: 'general',
			memberName: 'theythinkimcrazy',
			description: 'refrence',
			examples: ['hello']
		});
	}
	async run(msg) {
		return msg.say('But they dont know the feeling');
	}
};
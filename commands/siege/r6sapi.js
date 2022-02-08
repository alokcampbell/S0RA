const RainbowSixApi = require('rainbowsix-api-node');
const R6 = new RainbowSixApi();
const {
	Command
} = require('discord.js-commando');
const {
	RichEmbed
} = require('discord.js');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'rainbow',
			group: 'siege',
			memberName: 'rainbow',
			description: 'Gets stats of people on siege',
			examples: ['rainbow Solas'],
			args: [{
				key: 'text',
				prompt: 'What would you like to search for?',
				type: 'string'
			}]
		});
	}
	run(msg, args) {
        //Get stats on the user on that platform
        R6.stats(args.text, "uplay", /*optional true or false if you want operator details or not*/).then(response => {
            console.log(response);
            let embed = new RichEmbed()
			.setDescription(`R6 Info for ${response.player.username}`, msg.guild.iconURL)
            .addField("Stats:", "____")
            .addField("Casual", "____")
            .addField("Wins:", `${response.player.stats.casual.wins}`)
            .addField("Losses:", `${response.player.stats.casual.losses}`)
            .addField("wlr:", `${response.player.stats.casual.wlr}`)
            .addField("Kills:", `${response.player.stats.casual.kills}`)
            .addField("Deaths:", `${response.player.stats.casual.deaths}`)
            .addField("KD:", `${response.player.stats.casual.kd}`)
            .addField("Ranked", "___")
            .addField("Wins:", `${response.player.stats.ranked.wins}`)
            .addField("Losses:", `${response.player.stats.ranked.losses}`)
            .addField("wlr:", `${response.player.stats.ranked.wlr}`)
            .addField("Kills:", `${response.player.stats.ranked.kills}`)
            .addField("Deaths:", `${response.player.stats.ranked.deaths}`)
            .addField("KD:", `${response.player.stats.ranked.kd}`)

            let embed2 = new RichEmbed()
            .addField("Overall", "____")
            .addField("Revives:", `${response.player.stats.overall.revives}`)
            .addField("Suicides:", `${response.player.stats.overall.suicides}`)
            .addField("Reinforcements Deployed:", `${response.player.stats.overall.reinforcements_deployed}`)
            .addField("Barricades Built:", `${response.player.stats.overall.barricades_built}`)
            .addField("Steps Moved:", `${response.player.stats.overall.steps_moved}`)
            .addField("Bullets Fired:", `${response.player.stats.overall.bullets_fired}`)
            .addField("Bullets Hit:", `${response.player.stats.overall.bullets_hit}`)
            .addField("Headshots:", `${response.player.stats.overall.headshots}`)
            .addField("Melee Kills:", `${response.player.stats.overall.melee_kills}`)
            .addField("Penetration Kills:", `${response.player.stats.overall.penetration_kills}`)
            .addField("Assists:", `${response.player.stats.overall.assists}`)
            .addField("Progression", "____")
            .addField("Level:", `${response.player.stats.progression.level}`)
            .addField("XP:", `${response.player.stats.progression.xp}`)
        return msg.replyEmbed(embed), msg.channel.sendEmbed(embed2)
        }).catch(error => {
            console.error(error)
        });
        
        //For getting details about a user on R6 depending on platform
        // R6.profile(args.text, "uplay").then(response => {
        //     console.log(response);
        //     let embed = new RichEmbed()
		// 	.setAuthor('StudyBot!')
		// 	.setDescription('Server info:', msg.guild.iconURL)
		// 	.setColor("ffa735")
		// 	.addField("Server name:", `${msg.guild.name}`)
		// 	.addField("Created at :clock4: :", `${msg.guild.createdAt}`)
		// 	.addField("Owner:", `${msg.guild.owner.user.username}`)
		// 	.addField("Member Count:", `${msg.guild.memberCount}`)
		// 	.addField("Channel Count:", `${msg.guild.channels.array().length}`)
		// 	.addField("Region:", `${msg.guild.region}`)
		// 	.addField("Online Count:", `${msg.guild.presences.array().length}/${msg.guild.memberCount}`)
		// return msg.replyEmbed(embed)
        // }).catch(error => {
        //     console.error(error);
        // });
	}
};


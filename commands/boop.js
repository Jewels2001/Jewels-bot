/*module.exports = {
	name: 'boop',
	aliases: ['Boop', 'boop!'],
	description: 'Tag a member and boop them (but not really).',
	args: true,
	//guildOnly: true,
	execute(message, args) {
		//grab the "first" mentioned user from the message
    // this will return a `user` object, just like `msg.author`
    //however, needs coherence check in case no user is mentioned
		if (!message.mentions.users.size) {
			return message.reply('You need to tag a user in order to boop them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to boop: ${taggedUser.username}`);
	},
};
*/
module.exports = {
	name: 'boop',
	aliases: ['Boop', 'Boop!', 'boop!'],
	description: 'Boop!',
	args: true,
	cooldown: 5,
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply('You need to tag a user in order to boop them!');
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You wanted to boop: ${taggedUser.username}`);

	},
};

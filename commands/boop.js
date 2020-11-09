module.exports = {
	name: 'Boop',
	description: 'Tag a member and boop them (but not really).',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('You need to tag a user in order to boop them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to boop: ${taggedUser.username}`);
	},
};

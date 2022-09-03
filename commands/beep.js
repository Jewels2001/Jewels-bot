module.exports = {
	name: 'Beep',
	aliases: ['beep'],
	description: 'When a user types beep, the bot will reply boop.',
	args: true,
	execute(message, args) {
		message.channel.send(`Boop.`);
	},
};

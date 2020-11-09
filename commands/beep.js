module.exports = {
	name: 'Beep',
	description: 'When a user types beep, the bot will reply boop.',
	args: true,
	execute(message, args) {
		message.channel.send(`Boop.`);
	},
};

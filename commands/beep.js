module.exports = {
	name: 'Beep',
	description: 'When a user types beep, the bot will reply boop.',
	execute(message, args) {
		message.channel.send(`Boop.`);
	},
};

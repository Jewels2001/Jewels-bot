module.exports = {
	name: 'Beep.js',
	description: 'When a user types beep, the bot will reply boop.',
	execute(message) {
		message.channel.send(`Boop.`);
	},
};

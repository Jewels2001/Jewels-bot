module.exports = {
	name: 'Marco',
	description: 'Say Marco and the bot will say Polo back',
	execute(message, args) {
		message.channel.send(`Polo!`);
	},
};

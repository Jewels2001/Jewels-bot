module.exports = {
	name: 'Marco',
	aliases: ['marco'],
	description: 'Say Marco and the bot will say Polo back',
	args: true,
	execute(message, args) {
		message.channel.send(`Polo!`);
	},
};

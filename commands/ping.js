module.exports = {
	name: 'ping',
	aliases: ['Ping', 'Ping!', 'ping!'],
	description: 'Ping!',
	args: true,
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};

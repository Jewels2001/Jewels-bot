module.exports = {
	name: 'role',
	description: 'Temporary role command to show usage for UX',
	args: true,
  usage: '<user> <role>',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};

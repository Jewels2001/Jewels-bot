module.exports = {
	name: 'server',
	description: 'Display info about this server',
	execute(msg){
    msg.channel.send(`This server's name is: ${msg.guild.name}\n`);
    msg.channel.send(`Total members: ${msg.guild.memberCount}`);
	},
};

module.exports = {
	name: 'user-info',
	description: 'Display info about yourself',
	execute(msg){
    msg.channel.send(`Username: ${msg.author.username}\nID: ${msg.author.id}`);
	},
};

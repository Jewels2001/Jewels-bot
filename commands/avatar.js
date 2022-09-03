module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	description: 'Get the avatar URL for tagged users or your own.',
	execute(msg) {
    if(!msg.mentions.users.size){
      return msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL({ format: "png", dynamic: true})}>`);
    }

    const avatarList = msg.mentions.users.map(user => {
      return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true})}>`;
    });
    //send the entire array of strings as a message
    //by default, discord.js will `.join()` the array with `\n`
    msg.channel.send(avatarList);
	},
};

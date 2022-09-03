//Attempt to make an @anyone ping

/*
'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const list = client.guilds.cache.get("myServerID");
list.members.cache.forEach(member => console.log(member.user.username));
client.login('myTokenID');
*/

module.exports = {
	name: 'anyone',
	description: 'Pings one random person in the server when called.',
	execute(message, args) {

    //let onlineUsers = client.fetchMembers().array();

    guild.members.fetch().then(fetchedMembers => {
      const allOnline = fetchedMembers.filter(member => member.presence.status === 'online');
      for(let i=0; i<fetchedMembers.length; i++){
        var users = [`${fetchedMembers[i]}#${fetchedMembers[i].discriminator}`];
      }
    });

    /*for(let i=0; i<guilds.users.length; i++){
      let username = `${guild.fetchMembers()users[i].username}#${users[i].discriminator}`;
    }*/

    var randomUser = users[Math.floor(Math.random() * users.length)];
		message.channel.send(`Hi ${randomUser.username}!`);
	},
};

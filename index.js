//Good copy of index.js / what we want the bot to do

const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();



client.once('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.channel.send('Polo.');
  }
});

client.login(token);

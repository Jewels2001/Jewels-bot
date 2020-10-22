//Good copy of index.js / what we want the bot to do

const Discord = require("discord.js");
const { prefix, tokem } = require("./config.json");


const client = new Discord.Client();


client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('token');

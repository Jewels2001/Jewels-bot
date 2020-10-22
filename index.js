//Good copy of index.js / what we want the bot to do

const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();



client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  //event listeners callback function
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  //If does not start with prefix OR sent by a bot, exit.
  const args = msg.content.slice(prefix.length).trim().split(' ');
  //Slices off prefix, removes whitespace, splits into array by spaces
  const command = args.shift().toLowerCase();
  //Takes first element in array and removes it.
//***********************************************
  if (msg.content === `${prefix}ping`) {
    msg.reply('pong');
    msg.channel.send('polo?');
  }
  else if (msg.content.startsWith(`${prefix}Marco`)){
    msg.channel.send('Polo!');
  }
  else if(msg.content.startsWith(`${prefix}beep`)){
    msg.channel.send('Boop.');
  }
});

client.login(token);

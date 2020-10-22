//Good copy of index.js / what we want the bot to do
const fs = require('fs');
const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  //set a new item in the Collection w/ the key as command name and
  //the value as the exported module
  client.commands.set(command.name, command);
}


client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  //event listeners callback function
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  //If does not start with prefix OR sent by a bot, exit.
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  //Slices off prefix, removes whitespace, splits into array by spaces
  const command = args.shift().toLowerCase();
  //Takes first element in array and removes it.
//***********************************************
  if (msg.content === `${prefix}ping`) {
    msg.reply('pong');
  }
  else if (msg.content.startsWith(`${prefix}Marco`)){
    msg.channel.send('Polo!');
  }
  else if(msg.content.startsWith(`${prefix}beep`)){
    msg.channel.send('Boop.');
  }
  else if(command === 'boop'){
    //grab the "first" mentioned user from the message
    // this will return a `user` object, just like `msg.author`
    //however, needs coherence check in case no user is mentioned
    if(!msg.mentions.users.size){
      return msg.reply('You need to tag a user in order to boop them!');
    }
    const taggedUser = msg.mentions.users.first();
    msg.channel.send(`You wanted to boop: ${taggedUser.username}`)
  }
});

client.login(token);

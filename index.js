//Good copy of index.js / what we want the bot to do
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

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
  //if (msg.content === `${prefix}ping`) {
  if(command === 'ping'){
    //msg.reply('pong');
    //msg.channel.send('pong');
    client.commands.get('ping').execute(msg, args);
  }
  //else if (msg.content.startsWith(`${prefix}Marco`)){
  else if (command === 'Marco'){
    //msg.channel.send('Polo!');
    client.commands.get('marco').execute(msg, args);
  }
  else if(command === 'beep'){
    client.commands.get('beep').execute(msg, args);
  }
  else if(msg.content === `${prefix}server`){
    msg.channel.send(`This server's name is: ${msg.guild.name}\n`);
    msg.channel.send(`Total members: ${msg.guild.memberCount}`);
  }
  else if(msg.content === `${prefix}user-info`){
    msg.channel.send(`Username: ${msg.author.username}\nID: ${msg.author.id}`);
  }
  else if(command === 'args-info'){
    client.commands.get('args-info').execute(msg, args);

    //msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
  else if(command === 'boop'){
    //grab the "first" mentioned user from the message
    // this will return a `user` object, just like `msg.author`
    //however, needs coherence check in case no user is mentioned
    client.commands.get('boop').execute(msg, args);
  }
  else if(command === 'avatar'){
    client.commands,get('avatar').execute(msg);
  }
});

client.login(token);

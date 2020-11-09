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
  /*if (msg.content === `${prefix}ping`) {
  //if(command === 'ping'){
    //msg.reply('pong');
    //msg.channel.send('pong');
    //client.commands.get('ping').execute(msg, args);
  }
  //else if (msg.content.startsWith(`${prefix}Marco`)){
  else if (command === 'Marco'){
    //msg.channel.send('Polo!');
    client.commands.get('marco').execute(msg, args);
  }*/
  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('There was an error trying to execute that command!');
  }
});

client.login(token);

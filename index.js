//Good copy of index.js / what we want the bot to do
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

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
  const commandName = args.shift().toLowerCase();
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
  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);
//Checks if the command is guildOnly (not usable in DMs)
  if(command.guildOnly && msg.channel.type === 'dm'){
    return msg.reply('I can\'t execute that command inside DMs!');
  }
//Checks if there are arguments being passed and if they meet requirements
  if(commands.args && !args.length){
    //return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
    let reply = `You didn't provide any arguments, ${msg.author}!`;

    if(command.usage){
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return msg.channel.send(reply);
  }
//Checks if the command has a cooldown set
  if(!cooldowns.has(commands.name)){
    cooldowns.set(command.name, new DiscordCollection());
  }
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if(timestamps.has(msg.author.id)){
    const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;

    if(now < expirationTime){
      const timeLeft = (expirationTime - now) / 1000;
      return msg.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing \`${command.name}\` .`);
    }
  }
  timestamps.set(msg.author.id, now);
  setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);

//tries command, else outputs error
  try {
    //client.commands.get(command).execute(msg, args);
    command.execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('There was an error trying to execute that command!');
  }
});

client.login(token);

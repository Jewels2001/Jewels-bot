const fs = require('node:fs');
const path = require('node:path');
// Require necessary discord.js classes
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Dynamically retrieve commands and store in collection
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(commandsPath);
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
//read all files in regular folder
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in Collection w/ key = command name, value = exported module
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}
// read all files in sub folders
for (const folder of commandFolders) {
    const commandsPath1 = path.join(commandsPath, folder);
    const commandFiles = fs.readdirSync(commandsPath1).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath1, file);
        const command = require(filePath);
        // Set a new item in Collection w/ key = command name, value = exported module
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// When client is ready, run this code once
// c is event parameter 
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Responding to command when receiving an interaction
client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if(!command) {
        console.error(`No command matching ${interaction.commandName} found.`);
        return;
    }
    try {
        await command.execute(interaction);
    } catch(error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error trying to execute that command!', ephemeral: true});
        } else {
            await interaction.reply({ content: 'There was an error trying to execute that command!', ephemeral: true });
        }
    }
    console.log(interaction);
});


// Log in with client's token
client.login(token);
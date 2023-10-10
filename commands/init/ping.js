const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong.'),
    async execute(interaction) {
        await interaction.reply('Pong.');
    },
}



// OLD v12:

// module.exports = {
//     name: 'ping',
//     aliases: ['Ping', 'Ping!', 'ping!'],
//     description: 'Ping!',
//     args: true,
//     cooldown: 5,
//     execute(message, args) {
//         message.channel.send('Pong.');
//     },
// };

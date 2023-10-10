const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Display info about this server.'),
    async execute(interaction) {
        // interaction.guild is object representing the Guild where the command was run
        await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members. `);
    }
}


// module.exports = {
//     name: 'server',
//     description: 'Display info about this server',
//     execute(msg) {
//         msg.channel.send(`This server's name is: ${msg.guild.name}\n`);
//         msg.channel.send(`Total members: ${msg.guild.memberCount}`);
//     },
// };

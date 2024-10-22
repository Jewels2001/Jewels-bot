const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('boop')
        .setDescription('Boops the mentioned user')
        .addUserOption(option =>
            option
            .setName('user')
            .setDescription('The User\'s tag')
            .setRequired(true)),
    async execute(interaction) {
        const name = interaction.options.getUser('user')
        await interaction.reply(`Boop ${name}`);
    },
}
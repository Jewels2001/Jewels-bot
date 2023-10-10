const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides info about the user'),
    async execute(interaction) {
        // interaction.user is the User who ran the command
        // interaction.member is the GuildMember object,
        //      or the user in the specific guild
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    }
}


//OLD v12:

// module.exports = {
//     name: 'user-info',
//     description: 'Display info about yourself',
//     execute(msg) {
//         msg.channel.send(`Username: ${msg.author.username}\nID: ${msg.author.id}`);
//     },
// };

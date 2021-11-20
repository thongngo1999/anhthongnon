/*const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
     name: 'help',
     aliases: ['h'],
     category: 'user',
     description: 'How to use commands',
     usage: 'nab!help [command name] ',
     run: async (client, message, args) => {
        if (!args[0]) return getAll(client, message);
        return getCMD(client, message, args[0]);
     },
};
    
function getAll(client, message) {
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Use nab!help to see more')

    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`${cmd.name}\``)
            .join(',')           
    }

    const info = client.categories
        .map(cat => stripIndent`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);

    return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()
    const cmd = client.commands.get(input.toLowerCase() || client.commands.get(client.aliases.get(input.toLowerCase())));
    let info = `Can't find this command **${input.toLowerCase()}**`;

    if (!cmd) return message.channel.send(embed.setColor('ORANGE').setDescription(info));

    if (cmd.name) info = `**Commands name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**different name**: ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`;
    if (cmd.description) info += `\n**Commands detail**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Commands usage**: ${cmd.usage}`;
        embed.setFooter(`Syntax: <> = obligatory, [] = inobligatory`)
    }

    return message.channel.send(embed.setColor('BLUE').setDescription(info));
}
*/
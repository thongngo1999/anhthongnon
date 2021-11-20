const Discord = require("discord.js")

module.exports = {
    name: 'banlist',
    run: async(client , message , args ) => {
        let banslist = []
            message.guild.fetchBans().then(banned  => {
            let list = banned.map(user => `(username: **${user.user.tag}**ID: **${user.user.id}**)`).join(',\n');
            let embed = new Discord.MessageEmbed()
                .setTitle("**Guild Bans**")
                .setDescription(`${list}`)
                .setFooter("Total bans: " + banned.size)
                .setTimestamp()
                .setColor(message.member.displayHexColor || "RANDOM")
                message.channel.send(embed)
        });
    }
}
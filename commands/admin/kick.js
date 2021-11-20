const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "admin",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("❌\`Bạn nên có quyền quản trị để sử dụng lệnh này!\`")
        }
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(`Bạn không thể kick các thành viên`)
        }
        if (!args[0]) {
            return message.channel.send(`Vui lòng đề cập đến một người dùng!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.kick();
            await message.channel.send(`${member} đã bị kicked💨!`)
        } catch (e) {
            return message.channel.send(`Người dùng không có trong sever!`)
        }

    }
}
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "admin",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("❌\`Bạn nên có quyền quản trị để sử dụng lệnh này!\`")
        }
        if (!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR')) {
            return message.channel.send(`Bạn không thể cấm thành viên`)
        }
        if (!args[0]) {
            return message.channel.send(`vui lòng đề cập đến một người dùng!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            await message.channel.send(`${member} đã bị cấm khỏi sever!`)
        } catch (e) {
            return message.channel.send(`Người dùng không có trong sever!`)
        }

    }
}

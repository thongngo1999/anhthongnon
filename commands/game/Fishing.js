const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'Fishing',
    aliases: ['fishing'],
    run: async(client, message, args) => {
        const voicechannel = message.member.voice.channelID;
        if(!voicechannel) return message.reply(`Bạn phải vào voice mới sử dụng được lệnh!`)
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
            return message.reply(            
            embed = new MessageEmbed()
            .setTitle(`Click vào đây để khởi động trò chơi!`)
            .setURL(`${invite.code}`)
            .setAuthor('🎮Bảng điều khiển trò chơi🎮')
            .addField(`**📌Lưu ý📌**`, '📵không  chdànho các hệ điều hành của điện thoại thông minh📵')
            .setThumbnail(`https://i2.wp.com/i.gifer.com/MU9h.gif`)
            .setFooter(message.author.tag , message.member.user.displayAvatarURL({ dynamic: true }))
            .setColor('RANDOM')
            )
        })
    }
}
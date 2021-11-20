const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'Betrayal',
    aliases: ['betrayal'],
    run: async(client, message, args) => {
        const voicechannel = message.member.voice.channelID;
        if(!voicechannel) return message.reply(`Bạn phải vào voice mới sử dụng được lệnh!`)
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
            return message.reply(            
                embed = new MessageEmbed()
                .setTitle(`Click vào đây để khởi động trò chơi!`)
                .setURL(`${invite.code}`)
                .setAuthor('🎮Bảng điều khiển trò chơi🎮')
                .addField(`**📌Lưu ý📌**`, '📵không dành cho các hệ điều hành của điện thoại thông minh📵')
                .setThumbnail(`https://i.pinimg.com/originals/d7/49/06/d74906d39a1964e7d07555e7601b06ad.gif`)
                .setFooter(message.author.tag , message.member.user.displayAvatarURL({ dynamic: true }))
                .setColor('RANDOM')
                )
        })
    }
}
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'yt',
    aliases: ['Yt'],
    run: async(client, message, args) => {
        const voicechannel = message.member.voice.channelID;
        if(!voicechannel) return message.reply(`Bạn phải vào voice mới sử dụng được lệnh!`)
        client.discordTogether.createTogetherCode(voicechannel, 'youtube').then(async invite => {
            return message.reply(            
            embed = new MessageEmbed()
            .setTitle(`Click vào đây để khởi động youtube!`)
            .setURL(`${invite.code}`)
            .setAuthor('📻Bảng điều khiển Radio📻')
            .addField(`**📌Lưu ý📌**`, '📵không dành cho các hệ điều hành của điện thoại thông minh📵')
            .setThumbnail(`https://cdn.dribbble.com/users/4698224/screenshots/14687642/media/5ec8da524f45fdd8124c8b0334381d2d.gif`)
            .setFooter(message.author.tag , message.member.user.displayAvatarURL({ dynamic: true }))
            .setColor('RANDOM')
            )
        })
    }
}
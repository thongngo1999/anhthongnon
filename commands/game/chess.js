const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'chess',
    aliases: ['chess'],
    run: async(client, message, args) => {
        const voicechannel = message.member.voice.channelID;
        if(!voicechannel) return message.reply(`Bạn phải vào voice mới sử dụng được lệnh!`)
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
            return message.reply(            
            embed = new MessageEmbed()
            .setTitle(`Click vào đây để khởi động trò chơi!`)
            .setURL(`${invite.code}`)
            .setAuthor('🎮Bảng điều khiển trò chơi🎮')
            .addField(`**📌Lưu ý📌**`, '📵không dành cho các hệ điều hành của điện thoại thông minh📵')
            .setThumbnail(`https://cdn.dribbble.com/users/228367/screenshots/4603778/chemistryset_dribbble2.gif`)
            .setFooter(message.author.tag , message.member.user.displayAvatarURL({ dynamic: true }))
            .setColor('RANDOM')
            )
        })
    }
}
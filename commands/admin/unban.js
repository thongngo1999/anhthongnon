const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("❌\`Bạn nên có quyền quản trị để sử dụng lệnh này!\`")
        }
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Bạn thiếu quyền ** BAN_MEMBERS **!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('vui lòng nhập id người dùng để bỏ cấm!').then(m => m.delete({ timeout: 5000 }));


        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Không phải là người dùng hợp lệ!').then(m => m.delete({ timeout: 5000 }));
        }
        
        const reason = args[1] ? args.slice(1).join(' ') : 'Không có lý do';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Đã unban ${user.user.tag}`)
                    .setColor('RANDOM')
                    .addField('Người dùng ID', user.user.id, true)
                    .addField('Tên người dùng', user.user.tag, true)
                    .addField('Lý do bị cấm', user.reason != null ? user.reason : 'no reason')
                    .addField('Lý do được mở cấm', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`Người dùng ${member.tag} Không bị cấm!`)
                    .setColor('RANDOM')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('Xãy ra lỗi! Vui lòng thử lại sau 2s🛠')
        });

    }
}
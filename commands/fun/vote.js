const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'vote',
    run: async(client , message, args) => {
        if (!message.channel.send) return;
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name}`)
        .setDescription(args.join(" "))
        .addField("✅\`đồng ý không ý kiến\`" , "❌\`không đồng ý kiến trên\`")
        .setTimestamp()
        const msg = await message.channel.send(embed)
        await msg.react("✅");
        await msg.react("❌");

        const collector = msg.createReactionCollector(
            (reaction, user) =>
              ["✅", "❌"].includes(reaction.emoji.name) &&
              user.id === message.author.id
          );
            
      collector.on("collect", reaction => {
        reaction.users.remove(message.author).then(async () => {
        if (reaction.emoji.name === "✅") {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Đã đồng ý không ý kiến!`)
        .setColor('RANDOM')
        .setAuthor(`Bảng điều khiển phiếu bình chọn`)
        .setDescription('\n\`✅đồng ý không ý kiến\n❌không đồng ý kiến trên\`')
        .setFooter('\`Cảm ơn đã bình chọn! chúc các bạn 1 ngày vui vẻ!\`')
        setTimestamp()
        msg.edit(embed)
        message.channel.send(`cảm ơn bạn vì đã đưa ra bình chọn!`)
          }})
          reaction.users.remove(message.author).then(async () => {
                if (reaction.emoji.name === "❌") {
                const embed = new Discord.MessageEmbed()
                .setTitle(`Đã không đồng ý kiến trên!`)
                .setColor('RANDOM')
                .setAuthor(`Bảng điều khiển phiếu bình chọn`)
                .setDescription('\n\`✅đồng ý không ý kiến\n❌không đồng ý kiến trên\`')
                .setFooter('\`Cảm ơn đã bình chọn! chúc các bạn 1 ngày vui vẻ!\`')
                setTimestamp()
                msg.edit(embed)
                message.channel.send(`cảm ơn bạn vì đã đưa ra bình chọn!`)
            }})
            reaction.users.remove(message.author).then(async () => {
                if (reaction.emoji.name === "❌") {
                    if(msg) {
                        msg.delete()
                        message.channel.send(`bạn có thể nhắn cho admin sever để ý kiến nhé!`)
                    } else {
                        return;
                    }
                }})
        })
    }
}
/*const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'meme',
    description: 'Chạy 1 meme voice với bot',
    usage: '.meme / .v',
    aliases: ['v'],
    run: async (client, message , args ) => {
        if (!message.member.voice.channel) return("Chưa vào voice đòi chạy lệnh ? Cho ăn đập giờ 💢");
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('List Voice')
            .setTitle('Nhập [.v] để sử dụng các lệnh voice')
            .setDescription('Bot made by Thowm\n0️⃣ : Học tiếng mèo kêu trần duck bo\n1️⃣ : kimochiiiiiiiiiiii\n2️⃣ : ối dồi ôi huấn hoa hòe\n3️⃣ :  Những lời tiến bịp dạy\n4️⃣ : Battel rap hay nhất thế giới\n5️⃣ : bác trần dần \n6️⃣ : ohlishit =))\n❌ : Thoát voice / Hủy lệnh')
            .setFooter('Cảm ơn các bạn đã đọc list của chúng tôi!')
            .setTimestamp()
        const msg = await message.channel.send(embed)
        await msg.react("0️⃣");
        await msg.react("1️⃣");
        await msg.react("2️⃣");
        await msg.react("3️⃣");
        await msg.react("4️⃣");
        await msg.react("5️⃣");
        await msg.react("6️⃣");
        
        await msg.react("7️⃣");
        await msg.react("8️⃣");
        await msg.react("9️⃣");
        await msg.react("🔟");
        
        await msg.react("❌");
  
      const collector = msg.createReactionCollector(
        (reaction, user) =>
          ["0️⃣", "1️⃣", "2️⃣", "4️⃣", "3️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "❌"].includes(reaction.emoji.name) &&
          user.id === message.author.id
      );
  
      collector.on("collect", reaction => {
        reaction.users.remove(message.author).then(async () => {
          if (reaction.emoji.name === "0️⃣") {
              const embed = new Discord.MessageEmbed()
              .setTitle(`Đang phát lệnh Meow ...`)
              .setColor('RANDOM')
            .setAuthor('List Voice')
            .setDescription('Bot made by Thowm\n0️⃣ : Học tiếng mèo kêu trần duck bo\n1️⃣ : kimochiiiiiiiiiiii\n2️⃣ : ối dồi ôi huấn hoa hòe\n3️⃣ :  Những lời tiến bịp dạy\n4️⃣ : Battel rap hay nhất thế giới\n5️⃣ : bác trần dần \n6️⃣ : ohlishit =))\n❌ : Thoát voice / Hủy lệnh')
            .setFooter('Cảm ơn các bạn đã đọc list của chúng tôi!')
            .setTimestamp()
            msg.edit(embed)
            await msg.react("❌");
            message.member.voice.channel.join().then(VoiceConnection => {
            VoiceConnection.play(`./mp3/meo.mp3`);})
          }})
          reaction.users.remove(message.author).then(async () => {
            if (reaction.emoji.name === "1️⃣") {
                const embed = new Discord.MessageEmbed()
                .setTitle(`Đang phát lệnh rên remix ...`)
                .setColor('RANDOM')
                .setAuthor('List Voice')
                .setDescription('Bot made by Thowm\n0️⃣ : Học tiếng mèo kêu trần duck bo\n1️⃣ : kimochiiiiiiiiiiii\n2️⃣ : ối dồi ôi huấn hoa hòe\n3️⃣ :  Những lời tiến bịp dạy\n4️⃣ : Battel rap hay nhất thế giới\n5️⃣ : bác trần dần \n6️⃣ : ohlishit =))\n❌ : Thoát voice / Hủy lệnh')
                .setFooter('Cảm ơn các bạn đã đọc list của chúng tôi!')
                .setTimestamp()
              msg.edit(embed)
              await msg.react("❌");
              message.member.voice.channel.join().then(VoiceConnection => {
              VoiceConnection.play(`./mp3/kimochi.mp3`);})
            }})
            reaction.users.remove(message.author).then(async () => {
                if (reaction.emoji.name === "2️⃣") {
                    const embed = new Discord.MessageEmbed()
                    .setTitle(`Đang phát lệnh huấn hoa hòe ...`)
                    .setColor('RANDOM')
                    .setAuthor('List Voice')
                    .setDescription('Bot made by Thowm\n0️⃣ : Học tiếng mèo kêu trần duck bo\n1️⃣ : kimochiiiiiiiiiiii\n2️⃣ : ối dồi ôi huấn hoa hòe\n3️⃣ :  Những lời tiến bịp dạy\n4️⃣ : Battel rap hay nhất thế giới\n5️⃣ : bác trần dần \n6️⃣ : ohlishit =))\n❌ : Thoát voice / Hủy lệnh')
                    .setFooter('Cảm ơn các bạn đã đọc list của chúng tôi!')
                    .setTimestamp()
                  msg.edit(embed)
                  await msg.react("❌");
                  message.member.voice.channel.join().then(VoiceConnection => {
                  VoiceConnection.play(`./mp3/oidoioi.mp3`);})
                }})
                reaction.users.remove(message.author).then(async () => {
                    if (reaction.emoji.name === "3️⃣") {
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`Đang phát lệnh Tiến bịp ...`)
                        .setColor('RANDOM')
                        .setAuthor('List Voice')
                        .setDescription('Bot made by Thowm\n0️⃣ : Học tiếng mèo kêu trần duck bo\n1️⃣ : kimochiiiiiiiiiiii\n2️⃣ : ối dồi ôi huấn hoa hòe\n3️⃣ : Những lời tiến bịp dạy\n4️⃣ : Battel rap hay nhất thế giới\n5️⃣ : bác trần dần \n6️⃣ : ohlishit =))\n❌ : Thoát voice / Hủy lệnh')
                        .setFooter('Cảm ơn các bạn đã đọc list của chúng tôi!')
                        .setTimestamp()
                      msg.edit(embed)
                      await msg.react("❌");
                      message.member.voice.channel.join().then(VoiceConnection => {
                      VoiceConnection.play(`./mp3/tienbip.mp3`);})
                    }})
                    reaction.users.remove(message.author).then(async () => {
                      if (reaction.emoji.name === "4️⃣") {
                          const embed = new Discord.MessageEmbed()
                          .setTitle(`Đang phát lệnh Battelrap :)) ...`)
                          .setColor('RANDOM')
                          .setAuthor('List Voice')
                          .setDescription('Bot made by Thowm\n0️⃣ : Học tiếng mèo kêu trần duck bo\n1️⃣ : kimochiiiiiiiiiiii\n2️⃣ : ối dồi ôi huấn hoa hòe\n3️⃣ : Những lời tiến bịp dạy\n4️⃣ : Battel rap hay nhất thế giới\n5️⃣ : bác trần dần \n6️⃣ : ohlishit =))\n❌ : Thoát voice / Hủy lệnh')
                          .setFooter('Cảm ơn các bạn đã đọc list của chúng tôi!')
                          .setTimestamp()
                        msg.edit(embed)
                        await msg.react("❌");
                        message.member.voice.channel.join().then(VoiceConnection => {
                        VoiceConnection.play(`./mp3/battelrap.mp3`);})
                      }})
                      reaction.users.remove(message.author).then(async () => {
                        if (reaction.emoji.name === "5️⃣") {
                            const embed = new Discord.MessageEmbed()
                            .setTitle(`Đang phát lệnh Béc dần ...`)
                            .setColor('RANDOM')
                            .setAuthor('List Voice')
                            .setDescription('Bot made by Thowm\n0️⃣ : Học tiếng mèo kêu trần duck bo\n1️⃣ : kimochiiiiiiiiiiii\n2️⃣ : ối dồi ôi huấn hoa hòe\n3️⃣ : Những lời tiến bịp dạy\n4️⃣ : Battel rap hay nhất thế giới\n5️⃣ : bác trần dần \n6️⃣ : ohlishit =))\n❌ : Thoát voice / Hủy lệnh')
                            .setFooter('Cảm ơn các bạn đã đọc list của chúng tôi!')
                            .setTimestamp()
                          msg.edit(embed)
                          await msg.react("❌");
                          message.member.voice.channel.join().then(VoiceConnection => {
                          VoiceConnection.play(`./mp3/trandan.mp3`);})
                        }})
                      reaction.users.remove(message.author).then(async () => {
                        if (reaction.emoji.name === "6️⃣") {
                            const embed = new Discord.MessageEmbed()
                            .setTitle(`Đang phát lệnh ohlishit ...`)
                            .setColor('RANDOM')
                            .setAuthor('List Voice')
                            .setDescription('Bot made by Thowm\n0️⃣ : Học tiếng mèo kêu trần duck bo\n1️⃣ : kimochiiiiiiiiiiii\n2️⃣ : ối dồi ôi huấn hoa hòe\n3️⃣ : Những lời tiến bịp dạy\n4️⃣ : Battel rap hay nhất thế giới\n5️⃣ : bác trần dần \n6️⃣ : ohlishit =))\n❌ : Thoát voice / Hủy lệnh')
                            .setFooter('Cảm ơn các bạn đã đọc list của chúng tôi!')
                            .setTimestamp()
                          msg.edit(embed)
                          await msg.react("❌");
                          message.member.voice.channel.join().then(VoiceConnection => {
                          VoiceConnection.play(`./mp3/shit.mp3`);})
                        }})
                    reaction.users.remove(message.author).then(async () => {
                        if (reaction.emoji.name === "❌") {
                            if(msg) {
                                msg.delete()
                                message.member.voice.channel.leave()
                            } else {
                                return;
                            }
                        }})
      })
    }
}*/
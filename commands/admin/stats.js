const Discord = require("discord.js")
const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const config = require("../../config.json")

module.exports = {
    name: "stats",
    category: "admin",
  run: async (client, message, args) => {
  
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [Ngày], H [Giờ], m [Phút], s [Giây]");
      //
      let connectedchannelsamount = 0;
      let guilds = client.guilds.cache.map(guild=>guild)
      for(let i = 0; i< guilds.length; i++){
            if(guilds[i].me.voice.channel) connectedchannelsamount += 1;
            
      }

      const botinfo = new Discord.MessageEmbed()
          .setAuthor(client.user.username, config.AVATARURL) 
          .setTitle("Bảng cấu hình sever!")
          .setThumbnail(`https://i.pinimg.com/originals/36/d3/7f/36d37f7ebe12d5c3252d55ae9d7a402e.gif`)
          .setColor("Random")
          .addField("🖥 CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField("📈 Sử dụng bộ nhớ", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``, true)
          .addField("⌚️ Thời gian hoạt động ", `\`${duration}\``, true)
          .addField("\u200b", `\u200b`, true)

          .addField("📁 user", `\`${client.users.cache.size}\``, true)
          .addField("📁 Servers", `\`${client.guilds.cache.size}\``, true)
          .addField("\u200b", `\u200b`, true)


          .addField("👾 Discord.js", `\`v${version}\``, true)
          .addField("🤖 Node", `\`${process.version}\``, true)
          .addField("\u200b", `\u200b`, true)

          .addField("🤖 CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)

          .addField("📉 Nhiệt độ CPU", `\`${percent.toFixed(2)}%\``, true)
          .addField("🤖 Phiên bản", `\`${os.arch()}\``, true)
          .addField("\u200b", `\u200b`, true)
          
          .addField("💻 Nền tảng", `\`\`${os.platform()}\`\``, true)
          .addField("Độ trễ API", `\`${(client.ws.ping)}ms\``, true)
          .setFooter("info sever✔")
      message.channel.send(botinfo)
  });
  }
  };
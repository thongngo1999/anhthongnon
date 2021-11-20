const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  description: 'chat say',
  usager: 'say',
  category: 'fun',
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("❌\`Bạn nên có quyền quản trị để sử dụng lệnh này!\`")
  }
    if (message.deletable) message.delete()
    message.channel.send(args.join(" "))

    message.channel.send();

  }
}
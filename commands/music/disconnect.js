const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'disconnect',
  run: async (client, message) => {
  const channel = message.member.voice.channel;
    if (!channel)
      return message.channel.send(
        "Bạn phải tham gia kênh thoại trước khi sử dụng lệnh này!"
      );

    await channel.leave();

    return message.channel.send(
      new MessageEmbed()
        .setDescription("**Đã rời khỏi kênh thoại:white_check_mark: **")
        .setColor("RANDOM")
    );
  }
}

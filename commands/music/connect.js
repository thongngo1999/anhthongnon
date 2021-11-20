const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'connect',
  run: async (client, message) => {
    const channel = message.member.voice.channel;
    if (!channel)
      return message.channel.send(
        "Bạn phải tham gia kênh thoại trước khi sử dụng lệnh này!"
      );

    if (!channel.permissionsFor(message.client.user).has("CONNECT"))
      return error("Tôi không được phép tham gia kênh thoại");

    if (!channel.permissionsFor(message.client.user).has("SPEAK"))
      return error("Tôi không được phép nói bằng kênh thoại");

    await channel.join();

    return message.channel.send(
      new MessageEmbed()
        .setDescription("**Đã tham gia kênh thoại**:white_check_mark: **")
        .setColor("RANDOM")
    );
  }
}

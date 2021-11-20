const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'pause',
  run: async (client, message) => {
    const channel = message.member.voice.channel;
    if (!channel)
      return message.channel.send(
        "Bạn phải Tham gia kênh thoại trước khi sử dụng lệnh này!"
      );
    let queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.channel.send(
        new MessageEmbed()
          .setDescription(":x: Không có bài hát nào đang phát trong máy chủ này")
          .setColor("RANDOm")
      );
    if (queue.playing == false)
      return message.channel.send(
        new MessageEmbed()
          .setDescription(":x:Bài hát đã bị tạm dừng")
          .setColor("RANDOM")
      );
    queue.connection.dispatcher.pause();
    message.react("⏸");
    queue.playing = false;
    return message.channel.send(
      new MessageEmbed()
      .setDescription("**Đã tạm dừng nhạc :white_check_mark: **")
      .setColor("RANDOm")
    );
  }
}

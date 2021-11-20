const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'stop',
  run: async (client, message) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "Bạn phải tham gia kênh thoại trước khi sử dụng lệnh này!"
    );
  let queue = message.client.queue.get(message.guild.id);
  if (!queue)
    return message.channel.send(
      new MessageEmbed()
        .setDescription(":x: Không có bài hát nào đang phát trong máy chủ này")
        .setColor("RANDOm")
    );
  queue.connection.dispatcher.end();
  queue.queue = [];
  return message.channel.send(
    new MessageEmbed()
      .setDescription("**Đã dừng phát bài hát :white_check_mark: **")
      .setColor("RANDOM")
  );
}
}

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'resume',
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
        .setColor("RANDOM")
    );
  if (queue.playing == true)
    return message.channel.send(
      new MessageEmbed()
        .setDescription(":x: Bài hát đã được phát")
        .setColor("RANDOM")
    );
  queue.connection.dispatcher.resume();
  message.react("▶");
  queue.playing = true;
  return message.channel.send(
    new MessageEmbed()
    .setDescription("**Bài hát đã được tiếp tục phát :white_check_mark:**")
    .setColor("RANDOm")
  );
  }
}

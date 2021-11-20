const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'remove',
  run: async (client, message, args) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "Bạn phải Tham gia kênh thoại trước khi sử dụng lệnh này!"
    );
  if (!args[0])
    return message.channel.send(
      new MessageEmbed()
        .setDescription(":x: Vui lòng nhập số bài hát!")
        .setColor("RANDOM")
    );
  if (isNaN(args[0]))
    return message.channel.send(
      new MessageEmbed()
        .setDescription(":x: **Ví dụ -> [-remove 2]**")
        .setColor("RANDOM")
    );
  let queue = message.client.queue.get(message.guild.id);
  if (args[0] == 1)
    return message.channel.send(
      new MessageEmbed()
        .setDescription(
          ":x: **Không thể xóa bài hát hiện đang phát, hãy sử dụng lệnh bỏ qua**"
        )
        .setColor("RANDOM")
    );
  if (queue.queue.length == 1)
    return message.channel.send(
      new MessageEmbed()
        .setDescription(
          ":x: **Không thể xóa khi chỉ có một bài hát đang phát, Sử dụng lệnh dừng**"
        )
        .setColor("RANDOM")
    );
  if (args[0] > queue.queue.length)
    return message.channel.send(
      new MessageEmbed()
        .setDescription(":x: **Hàng đợi không có nhiều bài hát như vậy**")
        .setColor("RANDOM")
    );
  if (!queue)
    return message.channel.send(
      new MessageEmbed()
        .setDescription(":x: **Không có bài hát nào đang phát trong máy chủ này**")
        .setColor("RANDOM")
    );
  var name = queue.queue[args[0] - 1].name;
  queue.queue.splice(args[0] - 1);
  return message.channel.send(
    new MessageEmbed()
      .setDescription(
        "**ĐÃ xoá " + " " + name + " " + " từ hàng đợi :white_check_mark: **"
      )
      .setTimestamp()
      .setColor("RANDOm")
  );
  }
}

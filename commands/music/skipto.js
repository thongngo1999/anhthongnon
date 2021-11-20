const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'skipto',
  run: async (client, message, args) => {
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
  if (!args[0])
    return message.channel.send(
      new MessageEmbed()
        .setDescription("**You must specify the number to skip** :x:")
        .setColor("RED")
    );
  if (isNaN(args[0]))
    return message.channel.send(
      new MessageEmbed()
        .setDescription("**Vui lòng nhập số thứ tự của bài hát** :x:")
        .setColor("RANDOM")
    );
  queue.playing = !false;

  if (queue.loop) {
    for (let i = 0; i < parseInt(args[0]) - (1 + 1); i++) {
      var delta = queue.queue.shift();
      queue.queue.push(delta);
    }
  } else {
    queue.queue = queue.queue.slice(parseInt(args[0]) - (1 + 1));
  }

  try {
    queue.connection.dispatcher.end();
  } catch (e) {
    console.log(e);
    message.client.queue.delete(message.guild.id);
    queue.vc.leave();
  }

  return message.channel.send(
    new MessageEmbed()
      .setDescription(
        "**Đã bỏ qua bản nhạc để " +
          " `" +
          args[0] +
          "` " +
          ":white_check_mark:**"
      )
      .setColor("RANDOM")
  );
}
}

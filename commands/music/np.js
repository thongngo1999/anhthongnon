const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'np',
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
        .setColor("RANDOM")
        .setDescription(":x:Không có bài hát nào đang phát trong máy chủ này")
    );
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Now Playing",
        "https://img.icons8.com/color/2x/audio-wave--v2.gif"
      )
      .setColor("RANDOM")
      .setDescription(
        queue.queue[0].name +
          " Requested By: " +
          "<@" +
          queue.queue[0].requested +
          ">"
      )
      .setThumbnail(queue.queue[0].thumbnail)
      .setFooter("Có " + queue.queue.length + " bài hát trong hàng đợi")
  );
}
}

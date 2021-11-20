const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'volume',
  run: async (client, message, args) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "Bạn phải tham gia kênh thoại trước khi sử dụng lệnh này!"
    );

  let queue = message.client.queue.get(message.guild.id);

  if (!args[0])
    return message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Bộ điều khiển âm lượng chính",
          "https://img.icons8.com/color/2x/high-volume--v2.gif"
        )
        .setColor("RANDOM")
        .setDescription("**Volume hiện tại " + queue.volume + " **")
    );

  if (args[0] > 200)
    return message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Lỗi  bảng điều khiển âm lượng chính",
          "https://img.icons8.com/color/2x/high-volume--v2.gif"
        )
        .setColor("RANDOM")
        .setDescription("**Âm lượng không được vượt quá 100 :x: **")
    );

  queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
  queue.volume = args[0];
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Bộ điều khiển âm lượng chính",
        "https://img.icons8.com/color/2x/high-volume--v2.gif"
      )
      .setColor("RANDOM")
      .setDescription("**Volume đã được chỉnh về " + args[0] + " :white_check_mark: **")
  );
}
}

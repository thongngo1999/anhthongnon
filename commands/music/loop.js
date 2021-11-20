const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'loop',
  run: async (client, message) => {
  const queue = message.client.queue.get(message.guild.id);

  if (!queue)
    return message.channel.send(
      ":x: Không có bài hát nào đang phát trong máy chủ này"
    );

  queue.loop = !queue.loop;
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Master Loop Contrller",
        "https://img.icons8.com/color/2x/refresh--v2.gif"
      )
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription(
        "**Loop is" +
          (queue.loop == true ? " Enabled " : " Disabled ") +
        "cho bài hát hiện tại :white_check_mark: **"
      )
  );
}
}

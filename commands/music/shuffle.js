const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'shuffle',
  run: async (client, message, args) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "Bạn phải tham gia kênh thoại trước khi sử dụng lệnh này!"
    );
  const queue = message.client.queue.get(message.guild.id);
  if (!queue)
    return message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "Lỗi bộ điều khiển phát ngẫu nhiên chính",
          "https://img.icons8.com/color/2x/activity.gif"
        )
        .setDescription("** :x: Không có bài hát nào trong hàng đợi để phát ngẫu nhiên**")
        .setColor("RANDOM")
    );
  let songs = queue.queue;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
  }
  queue.queue = songs;
  message.client.queue.set(message.guild.id, queue);
  message.channel
    .send(
      new MessageEmbed()
        .setAuthor(
          "Bộ điều khiển phát ngẫu nhiên chính",
          "https://img.icons8.com/color/2x/activity.gif"
        )
        .setDescription("** :white_check_mark: Đã bật chế độ phát ngẫu nhiên trong hàng đợi**")
        .setColor("RANDOM")
    )
    .catch(console.error);
}
}

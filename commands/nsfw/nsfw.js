const client = require('nekos.life');
const Discord = require('discord.js');
const neko = new client();
const lewd = require("discord-hentai");
const anime = lewd.Anime;
const config = require(`../../config.json`);


module.exports = {
    name: 'nsfw',
    aliases: ['hentai', 'holo', 'hanal', 'neko', 'thighs'],
    run: async( client , message , args ) => {
      var errMessage = "\`Đây không phải là Kênh NSFW\`";
      if (!message.channel.nsfw) {
      message.react('💢');
      message.delete()
      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
    }
    }
}
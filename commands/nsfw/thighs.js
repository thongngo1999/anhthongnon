const client = require('nekos.life');
const Discord = require('discord.js');
const neko = new client();
const lewd = require("discord-hentai");
const anime = lewd.Anime;

module.exports = {
    name: 'thighs',
    run: async(client , message, args ) => {
        if (message.content) {
    
            let thighs = await anime.thighs();
        
            message.channel.send(thighs);
        
          }

    }
}
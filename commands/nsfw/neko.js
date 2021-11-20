const client = require('nekos.life');
const Discord = require('discord.js');
const neko = new client();
const lewd = require("discord-hentai");
const anime = lewd.Anime;

module.exports = {
    name: 'neko',
    run: async(client , message, args ) => {
        if (message.content) {
    
            let neko = await anime.neko();
        
            message.channel.send(neko)
        
          }

    }
}
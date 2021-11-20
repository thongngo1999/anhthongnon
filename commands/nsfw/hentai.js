const client = require('nekos.life');
const Discord = require('discord.js');
const neko = new client();
const lewd = require("discord-hentai");
const anime = lewd.Anime;

module.exports = {
    name: 'hentai',
    run: async(client , message, args ) => {
        if (message.content) {
    
            let hentai = await anime.hentai();
        
            message.channel.send(hentai);
          }
    }
}
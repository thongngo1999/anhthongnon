const client = require('nekos.life');
const Discord = require('discord.js');
const neko = new client();
const lewd = require("discord-hentai");
const anime = lewd.Anime;

module.exports = {
    name: 'holo',
    run: async(client , message, args ) => {
        if (message.content) {
    
            let holo = await anime.holo();
        
            message.channel.send(holo)
        
          }
    }
}
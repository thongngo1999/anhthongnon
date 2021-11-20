const lewd = require("discord-hentai");
const anime = lewd.Anime;

module.exports = {
    name: 'hanal',
    run: async(client , message, args ) => {
        if (message.content) {
            let hanal = await anime.hanal();
        
            message.channel.send(hanal)
        
          }
    }
}
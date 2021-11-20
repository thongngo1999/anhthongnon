const { client , message , util, Util } = require('discord.js');
const { timeout } = require('reconlx');

module.exports = {
    name: 'aemoji',
    aliases: ['emi'],
    run: async( client , message , args ) => {
        if(!args.length) return message.reply('❎\`Vui lòng nhập emoji để add!\`')


        for(const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if(parsedEmoji.id) {
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + 
                extension}`;
                message.guild.emojis
                .create(url, parsedEmoji.name)
                .then((emoji) => message.channel.send(`đã thêm : \`${emoji.url}\``));
                message.delete()
            }
        }
    }
}
const clearChat = require('clear-chat');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'clear',
    run: async( client , message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("❌\`Bạn nên có quyền quản trị để sử dụng lệnh này!\`")
        }
            let messages = await message.channel.bulkDelete(args[0] || 10);
            let chat = await clearChat.createChat(messages);
            message.channel.send(`Cleared ${messages.size} Messages`);
            await message.delete();
    }
}
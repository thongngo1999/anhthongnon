const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "send",
  category: "fun",
  usage: "send <@mention> <reason>",
  description: "\`Cảnh báo bất kỳ ai không tuân theo các quy tắc\`",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("❌\`Bạn nên có quyền quản trị để sử dụng lệnh này!\`")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("❌\`Vui lòng đề cập đến người mà bạn muốn cảnh báo - < prefix > @mention [ lý do ] \`")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("❌\`Mày không thể cảnh báo BOT được\`")
    }
    
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("❌\`Vui lòng cung cấp lý do để cảnh báo - warn @mention < lý do >\`")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    if(warnings === null) {
      db.set(`Cảnh báo_${message.guild.id}_${user.id}`, 1)
      user.send(`${reason}`)
      await message.channel.send()
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`${reason}`)
      await message.channel.send()
    }
    
  
  } 
}
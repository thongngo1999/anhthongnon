const { tictactoe } = require('reconlx')

module.exports = {
    name : 'tictactoe',
    aliases: ['ox'],
    run : async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Vui lòng đề cập tới người dùng!')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}
const { Client, Collection, MessageEmbed } = require('discord.js');
const client = new Client();
const { readdirSync } = require('fs');
const fetch = require("node-fetch");
const fs = require("fs");
const db = require('quick.db')
const Timeout = new Collection();
const { DiscordUNO } = require("discord-uno");
const discordUNO = new DiscordUNO();
const { token } = require('./config.json')





client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'clear') {
		let messages = await message.channel.bulkDelete(args[0] || 100);
		let chat = await clearChat.createChat(messages);
    await message.delete();
		message.channel.send('Đã xoá tin nhắn thành công✔');
	}
});



/*
client.on("message", async message => {
  if (message.content.toLowerCase() === "u!tao") {
      await discordUNO.createGame(message);
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!vao") 
      await discordUNO.addUser(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase()=== "u!roi") 
      await discordUNO.removeUser(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!batdau") 
      await discordUNO.startGame(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase().startsWith("u!danh")) 
      await discordUNO.playCard(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!ketthuc") 
      await discordUNO.endGame(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!tat") {
      await discordUNO.closeGame(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase().startsWith("u!uno")) 
      await discordUNO.UNO(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!rut")
      await discordUNO.draw(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!cards")
      await discordUNO.viewCards(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!ban")
      await discordUNO.viewTable(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!win")
      await discordUNO.viewWinners(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!caidat")
      await discordUNO.updateSetting(message);
});

client.on("message", async message => {
  if (message.content.toLowerCase() === "u!view") 
      await discordUNO.viewSettings(message);
});
*/



const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);

client.queue = new Map();
client.commands = new Collection();
client.aliases = new Collection();
client.categoryes = readdirSync("./commands/")
const settups = require("./handlers/setups");
settups(client);


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
  if (message.author.bot) return;
  const prefix = 'loz.' // con này là con thowm
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args , cmd);

})

client.on("message", async message => {
  if (message.author.bot) return;
  const prefix = 'Loz.' // con này là con thowm
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args , cmd);

})

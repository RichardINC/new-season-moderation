const { Discord, MessageEmbed } = require("discord.js");

module.exports.config = {
  name: "slowmode",
  aliases: ["slow", "yavasmod"],
  usage: "Taslak"
};

module.exports.execute = async(client , message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
if(!args[0]) return handler.mesaj("true", message.author, message.channel, answer.yetersiz, 5000);
let miktar = Number(args[0]);
message.channel.setRateLimitPerUser(miktar).catch();
message.react(emojis.onay);
  };
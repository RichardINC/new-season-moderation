const { Discord, MessageEmbed } = require("discord.js");

module.exports.config = {
  name: "clear",
  aliases: ["sil"],
  usage: "Taslak"
};

module.exports.execute = async(client , message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let miktar = Number (args[0]);
    if (!miktar || miktar < 1 || miktar > 100) return handler.mesaj("true", message.author, message.channel, answer.yetersiz, 5000);
    message.channel.bulkDelete(miktar).then(x => handler.mesaj("true", message.author, message.channel, `${emojis.onay} \`${message.channel.name}\` kanalındaki **${x.size}** mesaj başarıyla silindi!`, 5000));
  };
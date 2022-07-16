const { Discord, MessageEmbed } = require("discord.js");

module.exports.config = {
  name: "rkontrol",
  aliases: ["rkontrol", "rolkontrol", "rolecontrol", "rcontrol"],
  usage: "Taslak"
};

module.exports.execute = async(client , message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 

    if(!rol) handler.mesaj("true", message.author, message.channel, answer.rolyok, 4000)
    let sesli = message.guild.members.cache.filter(s => s.roles.cache.has(rol.id)).filter(s => s.voice.channel).map(s => s).join(', ');
    let sessiz = message.guild.members.cache.filter(s => s.roles.cache.has(rol.id)).filter(s => !s.voice.channel).map(s => s).join(', ');
    handler.mesaj("true", message.author, message.channel, `**__Rol Kontrol;__**
**>** \`Rol Adı:\` **${rol.name}**
**>** \`Rol ID:\` **${rol.id}**
**>** \`Roldeki Üye Sayısı:\` **${rol.members.size}**

**Seste Olanlar**
${sesli || "Kimse bulunmamaktadır."}
**Seste Olmayanlar**
${sessiz || "Kimse bulunmamaktadır."}`, 15000)
};
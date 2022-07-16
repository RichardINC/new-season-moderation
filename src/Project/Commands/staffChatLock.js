const { Discord, MessageEmbed } = require("discord.js");

module.exports.config = {
    name: "lock",
    aliases: ["kilit"],
    usage: "Taslak"
};

module.exports.execute = async(client , message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    let everyone = message.guild.roles.cache.find(a => a.name === "@everyone");
    let permObjesi = {};
    let everPermleri = message.channel.permissionOverwrites.get(everyone.id);
    everPermleri.allow.toArray().forEach(p => {
    permObjesi[p] = true;
    });
    everPermleri.deny.toArray().forEach(p => {
    permObjesi[p] = false;
    });
    if(message.channel.permissionsFor(everyone).has('SEND_MESSAGES')) {
    permObjesi["SEND_MESSAGES"] = false;
    message.channel.createOverwrite(everyone, permObjesi);
    message.react(emojis.onay);
    } else {
    permObjesi["SEND_MESSAGES"] = null;
    message.channel.createOverwrite(everyone, permObjesi);
    message.react(emojis.onay);
    };
      };


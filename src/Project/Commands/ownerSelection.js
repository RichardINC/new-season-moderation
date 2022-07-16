const { Discord, MessageEmbed } = require("discord.js");
const { MessageButton } = require('discord-buttons');

module.exports.config = {
  name: "selectsetup",
  aliases: [],
  usage: "Taslak"
};

module.exports.execute = async(client , message, args) => {

let Button1 = new MessageButton()
  .setStyle("red") 
  .setLabel("1")
  .setID('Button1'); 

let Button2 = new MessageButton()
  .setStyle("blurple")
  .setLabel("2") 
  .setID('Button2');


message.channel.send({ embed: { description: `qwe`}, buttons: [ Button1, Button2] });

client.on('clickButton', async (button) => {

    if (button.id === 'Button1') {
        if (button.clicker.member.roles.cache.get(config.selection.rol1)) {
            await button.clicker.member.roles.remove(config.selection.rol1)
            await button.think(true);
            await button.reply.edit(`Rol Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(config.selection.rol1)
            await button.think(true);
            await button.reply.edit(`Rol Üzerinize Verildi!`)
        }
    }

    if (button.id === 'Button2') {
        if (button.clicker.member.roles.cache.get(config.selection.rol2)) {
            await button.clicker.member.roles.remove(config.selection.rol2)
            await button.think(true);
            await button.reply.edit(`**Rol Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(config.selection.rol2)
            await button.think(true);
            await button.reply.edit(`Rol Üzerinize Verildi!`)
        }

    }
})
};
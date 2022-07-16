const { Discord, MessageEmbed } = require("discord.js");

module.exports.config = {
  name: "avatar",
  aliases: ["pp"],
  usage: "Taslak"
};

module.exports.execute = async(client , message, args) => {
    let victim = message.author;
	let avatar = victim.avatarURL({ dynamic: true, size: 2048 });
  let richardemb = new MessageEmbed()
    .setColor("RANDOM")
    .setFooter(config.client.footer)
  .setAuthor(victim.tag, avatar)
	.setImage(avatar)
	message.channel.send(richardemb);
  };


const { Discord, MessageEmbed } = require("discord.js");


module.exports = async () => {

  client.user.setPresence({ activity: { name: config.client.activity }, status: "ONLINE" });
  if(config.client.voice) client.channels.cache.get(config.client.voice).join();

}

module.exports.config = {

  name: "ready",
}

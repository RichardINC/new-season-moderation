const { Discord, MessageEmbed } = require("discord.js");

  module.exports.config = {

  name: "crew",
  aliases: ["ekip"],
  usage: "Taslak",
  
                          };

module.exports.execute = async(client, message, args) => {

    let cmd = args[0];
    if (!message.member.roles.cache.has(config.register.staff) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(emojis.hata);
    if(!cmd) return handler.hata("qweqwe", message.author, message.channel, `${answer.hatalikullanim} \`Örnek: ${config.client.prefix}ekip [all, ${config.crew.crew1.hashtag}, ${config.crew.crew2.hashtag}] @Richârd/ID\``, 10000)
  
    if(cmd === config.crew.crew1.name) {
      let online = message.guild.members.cache.filter(only => only.presence.status != "offline").filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew1.name) && uye.user.discriminator.includes(config.crew.crew1.hashtag)).size;
      let sunucutag = message.guild.members.cache.filter(x => x.user.discriminator == config.crew.crew1.hashtag || x.user.username.includes(config.crew.crew1.name)).filter(c => c.user.username.includes(config.guild.tag)).size;

      let isimtagli = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew1.name)).size;
      let etikettagli = message.guild.members.cache.filter(uye => uye.user.discriminator.includes(config.crew.crew1.hashtag)).size;
      let isimses = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew1.name)).filter(s => s.voice.channel).size;
      let sayises = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew1.hashtag)).filter(s => s.voice.channel).size;
      let isimsessiz = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew1.name)).filter(s => !s.voice.channel).size;
      let sayisessiz = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew1.hashtag)).filter(s => !s.voice.channel).size;
      let yetkilitag = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew1.name) && uye.user.discriminator.includes(config.crew.crew1.hashtag)).filter(uye => uye.roles.cache.has(config.register.staff)).size;
      
    handler.mesaj("true", message.author, message.channel, `**${client.guilds.cache.get(config.guild.server).name}** Sunucumuzda bulunan "${config.crew.crew1.name} #${config.crew.crew1.hashtag}" ekibinin detaylı bilgileri aşağıda listelenmiştir.

**Genel Ekip Bilgileri; (\`Toplam ${isimtagli + etikettagli} kişi\`)**

\`Ekip Lideri =>\` **${config.crew.crew1.owner}**
\`Ekip Adı =>\` **${config.crew.crew1.name}**
\`Ekip Etiket Tagı =>\` **${config.crew.crew1.tag}**
\`Ekip Rolü =>\` **${config.crew.crew1.role}**

**Sunucu İçerisindeki Ekip Bilgileri;**

\`Toplam Sunucu Taglı =>\` **${sunucutag}**
\`Ekipteki Aktifler =>\` **${online}**
\`Ekipteki Sesli =>\` **${isimses + sayises}**
\`Ekipteki Pasifler =>\` **${isimsessiz + sayisessiz}**
\`Ekipteki Yetkililer =>\` **${yetkilitag}**
`)
   }

  if(cmd === config.crew.crew1.hashtag) {
        let online = message.guild.members.cache.filter(only => only.presence.status != "offline").filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew1.name) && uye.user.discriminator.includes(config.crew.crew1.hashtag)).size;
        let sunucutag = message.guild.members.cache.filter(x => x.user.discriminator == config.crew.crew1.hashtag || x.user.username.includes(config.crew.crew1.name)).filter(c => c.user.username.includes(config.guild.tag)).size;

        let isimtagli = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew1.name)).size;
        let etikettagli = message.guild.members.cache.filter(uye => uye.user.discriminator.includes(config.crew.crew1.hashtag)).size;
        let isimses = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew1.name)).filter(s => s.voice.channel).size;
        let sayises = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew1.hashtag)).filter(s => s.voice.channel).size;
        let isimsessiz = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew1.name)).filter(s => !s.voice.channel).size;
        let sayisessiz = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew1.hashtag)).filter(s => !s.voice.channel).size;
        let yetkilitag = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew1.name) && uye.user.discriminator.includes(config.crew.crew1.hashtag)).filter(uye => uye.roles.cache.has(config.register.staff)).size;
        
      handler.mesaj("true", message.author, message.channel, `**${client.guilds.cache.get(config.guild.server).name}** Sunucumuzda bulunan "${config.crew.crew1.name} #${config.crew.crew1.hashtag}" ekibinin detaylı bilgileri aşağıda listelenmiştir.

**Genel Ekip Bilgileri; (\`Toplam ${isimtagli + etikettagli} kişi\`)**

\`Ekip Lideri =>\` **${config.crew.crew1.owner}**
\`Ekip Adı =>\` **${config.crew.crew1.name}**
\`Ekip Etiket Tagı =>\` **${config.crew.crew1.tag}**
\`Ekip Rolü =>\` **${config.crew.crew1.role}**

**Sunucu İçerisindeki Ekip Bilgileri;**

\`Toplam Sunucu Taglı =>\` **${sunucutag}**
\`Ekipteki Aktifler =>\` **${online}**
\`Ekipteki Sesli =>\` **${isimses + sayises}**
\`Ekipteki Pasifler =>\` **${isimsessiz + sayisessiz}**
\`Ekipteki Yetkililer =>\` **${yetkilitag}**
`)
     }

     if(cmd === config.crew.crew2.name) {
      let online = message.guild.members.cache.filter(only => only.presence.status != "offline").filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew2.name) && uye.user.discriminator.includes(config.crew.crew2.hashtag)).size;
      let sunucutag = message.guild.members.cache.filter(x => x.user.discriminator == config.crew.crew2.hashtag || x.user.username.includes(config.crew.crew2.name)).filter(c => c.user.username.includes(config.guild.tag)).size;

      let isimtagli = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew2.name)).size;
      let etikettagli = message.guild.members.cache.filter(uye => uye.user.discriminator.includes(config.crew.crew2.hashtag)).size;
      let isimses = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew2.name)).filter(s => s.voice.channel).size;
      let sayises = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew2.hashtag)).filter(s => s.voice.channel).size;
      let isimsessiz = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew2.name)).filter(s => !s.voice.channel).size;
      let sayisessiz = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew2.hashtag)).filter(s => !s.voice.channel).size;
      let yetkilitag = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew2.name) && uye.user.discriminator.includes(config.crew.crew2.hashtag)).filter(uye => uye.roles.cache.has(config.register.staff)).size;
      
    handler.mesaj("true", message.author, message.channel, `**${client.guilds.cache.get(config.guild.server).name}** Sunucumuzda bulunan "${config.crew.crew2.name} #${config.crew.crew2.hashtag}" ekibinin detaylı bilgileri aşağıda listelenmiştir.

**Genel Ekip Bilgileri; (\`Toplam ${isimtagli + etikettagli} kişi\`)**

\`Ekip Lideri =>\` **${config.crew.crew2.owner}**
\`Ekip Adı =>\` **${config.crew.crew2.name}**
\`Ekip Etiket Tagı =>\` **${config.crew.crew2.tag}**
\`Ekip Rolü =>\` **${config.crew.crew2.role}**

**Sunucu İçerisindeki Ekip Bilgileri;**

\`Toplam Sunucu Taglı =>\` **${sunucutag}**
\`Ekipteki Aktifler =>\` **${online}**
\`Ekipteki Sesli =>\` **${isimses + sayises}**
\`Ekipteki Pasifler =>\` **${isimsessiz + sayisessiz}**
\`Ekipteki Yetkililer =>\` **${yetkilitag}**
`)
   }


   if(cmd === config.crew.crew2.hashtag) {
    let online = message.guild.members.cache.filter(only => only.presence.status != "offline").filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew2.name) && uye.user.discriminator.includes(config.crew.crew2.hashtag)).size;
    let sunucutag = message.guild.members.cache.filter(x => x.user.discriminator == config.crew.crew2.hashtag || x.user.username.includes(config.crew.crew2.name)).filter(c => c.user.username.includes(config.guild.tag)).size;

    let isimtagli = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew2.name)).size;
    let etikettagli = message.guild.members.cache.filter(uye => uye.user.discriminator.includes(config.crew.crew2.hashtag)).size;
    let isimses = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew2.name)).filter(s => s.voice.channel).size;
    let sayises = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew2.hashtag)).filter(s => s.voice.channel).size;
    let isimsessiz = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew2.name)).filter(s => !s.voice.channel).size;
    let sayisessiz = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew2.hashtag)).filter(s => !s.voice.channel).size;
    let yetkilitag = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew2.name) && uye.user.discriminator.includes(config.crew.crew2.hashtag)).filter(uye => uye.roles.cache.has(config.register.staff)).size;
    
  handler.mesaj("true", message.author, message.channel, `**${client.guilds.cache.get(config.guild.server).name}** Sunucumuzda bulunan "${config.crew.crew2.name} #${config.crew.crew2.hashtag}" ekibinin detaylı bilgileri aşağıda listelenmiştir.

**Genel Ekip Bilgileri; (\`Toplam ${isimtagli + etikettagli} kişi\`)**

\`Ekip Lideri =>\` **${config.crew.crew2.owner}**
\`Ekip Adı =>\` **${config.crew.crew2.name}**
\`Ekip Etiket Tagı =>\` **${config.crew.crew2.tag}**
\`Ekip Rolü =>\` **${config.crew.crew2.role}**

**Sunucu İçerisindeki Ekip Bilgileri;**

\`Toplam Sunucu Taglı =>\` **${sunucutag}**
\`Ekipteki Aktifler =>\` **${online}**
\`Ekipteki Sesli =>\` **${isimses + sayises}**
\`Ekipteki Pasifler =>\` **${isimsessiz + sayisessiz}**
\`Ekipteki Yetkililer =>\` **${yetkilitag}**
`)
 }

 if(cmd === "all") {
    
    let embed = new MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL()).setFooter(config.client.footer).setColor("RANDOM");
    let sunucutag1 = message.guild.members.cache.filter(x => x.user.discriminator == config.crew.crew1.hashtag || x.user.username.includes(config.crew.crew1.name)).filter(c => c.user.username.includes(config.guild.tag)).size;
    let isimtagli1 = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew1.name)).size;
    let etikettagli1 = message.guild.members.cache.filter(uye => uye.user.discriminator.includes(config.crew.crew1.hashtag)).size;
    let online1 = message.guild.members.cache.filter(only => only.presence.status != "offline").filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew1.name) && uye.user.discriminator.includes(config.crew.crew1.hashtag)).size;
    let isimses1 = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew1.name)).filter(s => s.voice.channel).size;
    let sayises1 = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew1.hashtag)).filter(s => s.voice.channel).size;

    let sunucutag2 = message.guild.members.cache.filter(x => x.user.discriminator == config.crew.crew2.hashtag || x.user.username.includes(config.crew.crew2.name)).filter(c => c.user.username.includes(config.guild.tag)).size;
    let isimtagli2 = message.guild.members.cache.filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew2.name)).size;
    let etikettagli2 = message.guild.members.cache.filter(uye => uye.user.discriminator.includes(config.crew.crew2.hashtag)).size;
    let online2 = message.guild.members.cache.filter(only => only.presence.status != "offline").filter(uye => uye.user.username.toLowerCase().includes(config.crew.crew2.name) && uye.user.discriminator.includes(config.crew.crew2.hashtag)).size;
    let isimses2 = message.guild.members.cache.filter(s => s.user.username.toLowerCase().includes(config.crew.crew2.name)).filter(s => s.voice.channel).size;
    let sayises2 = message.guild.members.cache.filter(s => s.user.discriminator.includes(config.crew.crew2.hashtag)).filter(s => s.voice.channel).size;

    message.channel.send(embed.setDescription(`**${client.guilds.cache.get(config.guild.server).name}** Sunucumuzda bulunan bütün ekiplerin aktiflik bilgileri aşağıda listelenmiştir;`)
    .addField(config.crew.crew1.name + config.crew.crew1.tag,`${emojis.yildiz} Ekip Lideri: **${config.crew.crew1.owner}**
${emojis.yildiz} Toplam Üye: **${isimtagli1 + etikettagli1}**
${emojis.yildiz} Çevrimiçi Üye: **${online1}**
${emojis.yildiz} Sesteki Üye: **${isimses1 + sayises1}**
${emojis.yildiz} Taglı Üye: **${sunucutag1}**`, true)
.addField(config.crew.crew2.name + config.crew.crew2.tag,`${emojis.yildiz} Ekip Lideri: **${config.crew.crew2.owner}**
${emojis.yildiz} Toplam Üye: **${isimtagli2 + etikettagli2}**
${emojis.yildiz} Çevrimiçi Üye: **${online2}**
${emojis.yildiz} Sesteki Üye: **${isimses2 + sayises2}**
${emojis.yildiz} Taglı Üye: **${sunucutag2}**`, true).setImage("https://media.discordapp.net/attachments/873242108285288449/882662499420352532/e0a783fbf02965d8a9f2ac583a46b407.jpg"))
 }
};

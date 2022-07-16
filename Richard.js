const {Client} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const fs = require("fs");
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
const logs = require('discord-logs');
require('discord-buttons')(client)
logs(client)
const commands = new Map();
global.commands = commands;
const aliases = new Map();
const guildInvites = new Map();
global.aliases = aliases;
global.client = client;


///////////////// GLOBALS /////////////////
const funcs = global.funcs = require('./src/Functions/Functions.js');
const config = global.config = require("./src/Configurations/config");
const emojis = global.emojis = require('./src/Configurations/emojis');
require("./src/Database/Utils");
///////////////// GLOBALS /////////////////

///////////////// MAINS /////////////////
const globalAnswer = global.globalAnswer = require("./src/Database/Answer");
const handler = global.handler = require("./src/Handlers/secretHandler");
const classxd = require("./src/Handlers/newClass");
const loginxd = require("./src/Handlers/clientLogin");
globalAnswer.replySetup()
loginxd.setup()
classxd.setup()
///////////////// MAINS /////////////////

///////////////////
console.log('\x1b[33m%s\x1b[0m', `[ BOT BAŞLATILIYOR ]`);
client.on("message", (message) => {
        if (message.author.bot ||!message.content.startsWith(config.client.prefix) || !message.channel || message.channel.type == "dm") return;
        let args = message.content
          .substring(config.client.prefix.length)
          .split(" ");
        let command = args[0];
        let bot = message.client;
        args = args.splice(1);
        let calistirici;
        if (commands.has(command)) {
          calistirici = commands.get(command);
          calistirici.execute(bot, message, args);
        } else if (aliases.has(command)) {
          calistirici = aliases.get(command);
          calistirici.execute(bot, message, args);
        }
  })
///////////////////
fs.readdir("./src/Project/Commands", (err, files) => {
  if(err) return console.error(err);
  files = files.filter(file => file.endsWith(".js"));
  console.log('\x1b[31m%s\x1b[0m', `[ ------------------------------- ]`);
  console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
  files.forEach(file => {
      let prop = require(`./src/Project/Commands/${file}`);
      if(!prop.config) return;
      if(typeof prop.onLoad === "function") prop.onLoad(client);
      commands.set(prop.config.name, prop);
      if(prop.config.aliases) prop.config.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
///////////////////
  fs.readdir("./src/Project/Events", (err, files) => {
                if(err) return console.error(err);
                console.log('\x1b[31m%s\x1b[0m', `[ ------------------------------- ]`);
                console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
                console.log('\x1b[31m%s\x1b[0m', `[ ------------------------------- ]`);
                console.log('\x1b[33m%s\x1b[0m', `[ BAŞARIYLA GİRİŞ YAPILDI ]`);
                files.filter(file => file.endsWith(".js")).forEach(file => {
                    let prop = require(`./src/Project/Events/${file}`);
                    if(!prop.config) return;
                    client.on(prop.config.name, prop);
                });
              });
/*
///////////////////
client.on('guildMemberRoleAdd', async(member, role) =>  {
  let atilanAy = moment(Date.now()).format("MM");
  let saat = parseInt(moment(Date.now()).format("HH"))+3;
  let dakika = moment(Date.now()).format("mm");
  let atilanSaat = `${saat}:${dakika}` 
  let atilanYıl = moment(Date.now()).format("YYYY");
  let atilanGün = moment(Date.now()).format("DD");
  let tarihxd = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;
  
      const Log = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" }).then(audit => audit.entries.first());
      if (!Log || !Log.executor || Log.createdTimestamp < (Date.now() - 5000) || member.guild.roles.cache.get(role.id).position < member.guild.roles.cache.get(config.commander).position) return;
      scarydb.add(`rolsayi_${member.id}`, +1)
      scarydb.push(`rollogu.${member.id}_qwe`, {
      verilenrol: role.id,
      emoji: emojis.onay,
      roldurum: "verildi",
      yetkili: Log.executor.id,
      tarih: tarihxd
      })
  })
  client.on('guildMemberRoleRemove', async(member, role) =>  {
  let atilanAy = moment(Date.now()).format("MM");
  let saat = parseInt(moment(Date.now()).format("HH"))+3;
  let dakika = moment(Date.now()).format("mm");
  let atilanSaat = `${saat}:${dakika}` 
  let atilanYıl = moment(Date.now()).format("YYYY");
  let atilanGün = moment(Date.now()).format("DD");
  let tarihxd = `${atilanGün} ${atilanAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${atilanYıl} ${atilanSaat}`;
      
      const Log = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" }).then(audit => audit.entries.first());
      if (!Log || !Log.executor || Log.createdTimestamp < (Date.now() - 5000) || member.guild.roles.cache.get(role.id).position < member.guild.roles.cache.get(config.commander).position) return;
      scarydb.add(`rolsayi_${member.id}`, +1)
      scarydb.push(`rollogu.${member.id}_qwe`, {
      verilenrol: role.id,
      emoji: emojis.hata,
      roldurum: "alındı",
      yetkili: Log.executor.id,
      tarih: tarihxd
      })
  })
*/
///////////////////////

  client.embedGenislet = async function(description, author = false, footer = false, features = false) {
      let embedSize = parseInt(`${description.length/2048}`.split('.')[0])+1
      let embeds = new Array()
      for (var i = 0; i < embedSize; i++) {
        let desc = description.split("").splice(i*2048, (i+1)*2048)
        let x = new MessageEmbed().setDescription(desc.join(""))
        if (i == 0 && author) x.setAuthor(author.name, author.icon ? author.icon : null)
        if (i == embedSize-1 && footer) x.setFooter(footer.name, footer.icon ? footer.icon : null)
        if (i == embedSize-1 && features && features["setTimestamp"]) x.setTimestamp(features["setTimestamp"])
        if (features) {
          let keys = Object.keys(features)
          keys.forEach(key => {
            if (key == "setTimestamp") return
            let value = features[key]
            if (i !== 0 && key == 'setColor') x[key](value[0])
            else if (i == 0) {
              if(value.length == 2) x[key](value[0], value[1])
              else x[key](value[0])
            }
          })
        }
        embeds.push(x)
      }
      return embeds
    };
    
    client.on('clickButton', async (button) => {
      // Button1
      if (button.id === '1') {
          await button.think(true);
          let serverJoin = moment
          .utc(client.guilds.cache.get(config.guild.server).members.cache.get(button.clicker.member.id).joinedAt)
          .format("**DD/MM/YYYY**")
          .replace("Monday", `**Pazartesi**`)
          .replace("Tuesday", `**Salı**`)
          .replace("Wednesday", `**Çarşamba**`)
          .replace("Thursday", `**Perşembe**`)
          .replace("Friday", `**Cuma**`)
          .replace("Saturday", `**Cumartesi**`)
          .replace("Sunday", `**Pazar**`)
          .replace("January", `**Ocak**`)
          .replace("February", `**Şubat**`)
          .replace("March", `**Mart**`)
          .replace("April", `**Nisan**`)
          .replace("May", `**Mayıs**`)
          .replace("June", `**Haziran**`)
          .replace("July", `**Temmuz**`)
          .replace("August", `**Ağustos**`)
          .replace("September", `**Eylül**`)
          .replace("October", `**Ekim**`)
          .replace("November", `**Kasım**`)
          .replace("December", `**Aralık**`);
          await button.reply.edit(serverJoin)
  }
  
      // Button2
      if (button.id === '2') {
          await button.think(true);
          let names = memberdb.cek(`isimler.${button.clicker.member.id}`);
          oldnames = `Kullanıcının eski isimleri bulunmamaktadır!`
          if(names) { oldnames = names.length > 0 ? names.map((value, index) => ` \`${value.guildName}\` **(<@&${value.Komut}>) [<@${value.Yetkili}>]**`).join("\n") : "Bu Üyenin İsim Geçmişi Bulunamadı.";    }
          await button.reply.edit(oldnames)
  }
  
      // Button3
      if (button.id === '3') {
          await button.think(true);
          let sunucu = client.guilds.cache.get(config.guild.server).memberCount;
      
          let online = client.guilds.cache.get(config.guild.server).members.cache.filter(only => only.presence.status != "offline").size;
        
          let tagli = client.guilds.cache.get(config.guild.server).members.cache.filter(uye => uye.user.username.includes(config.guild.tag)).size;
        const voiceChannels = client.guilds.cache.get(config.guild.server).channels.cache.filter(c => c.type === 'voice');
          let ses = 0;
          for (const [id, voiceChannel] of voiceChannels) ses += voiceChannel.members.size;
            let sestag = client.guilds.cache.get(config.guild.server).members.cache.filter(uye => uye.user.username.includes(config.guild.tag) && uye.voice.channel).size
    
            let boostseviye = client.guilds.cache.get(config.guild.server).premiumTier;
            let boostsayi = client.guilds.cache.get(config.guild.server).premiumSubscriptionCount;
            
            let sesli = client.guilds.cache.get(config.guild.server).members.cache.filter(s => s.voice.channel).size;
    
        let artikac;
        if(sesli >= 5) {artikac = sesli - 5} else { artikac = 0}
    
          await button.reply.edit(`**+** Anlık olarak **${sesli}** (**+${artikac}**) kişi ses kanallarında aktif!
**+** Sunucumuzda toplam **${sunucu}** üye var (**${online}** Aktif)
**+** Toplam **${tagli}** kişi tagımızı alarak bize destek oluyor
**+** Sunucumuz şuan da **${boostseviye}** seviye ve **${boostsayi}** boost basılmış!`)
  }
  
  
      // Button4
      if (button.id === '4') {
          await button.think(true);
          let soncezainfo = penals.cek(`sonceza.${button.clicker.member.id}.${config.guild.server}`);
          if(!soncezainfo) {
              await button.reply.edit(`Sunucumuza kayıtlı ceza kaydınız bulunumamaktadır.`)
          } else {
          await button.reply.edit(`${client.guilds.cache.get(config.guild.server).name} Sunucumuza kayıtlı son cezanız aşağıda bulunmaktadır;
  \`\`\`cs
  > Ceza ID => #${soncezainfo.id}
  > Ceza Durumu => ${soncezainfo.durum}
  > Yetkili => ${soncezainfo.mod}
  > Tür => ${soncezainfo.komut}
  > Sebep => ${soncezainfo.sebep}
  > Bitiş Tarihi => ${soncezainfo.bitis}
  \`\`\``)
      }
  }
  
  
      // Button5
      if (button.id === '5') {
          await button.think(true);
  
          let sicilsayi = penals.cek(`sicilsayi.${button.clicker.member.id}.${config.guild.server}`);
          let sicilminerdelanit = penals.cek(`sicil.${button.clicker.member.id}.${config.guild.server}`);
       if (!sicilminerdelanit) { await button.reply.edit(`**${client.guilds.cache.get(config.guild.server).name}** sunucusunda kayıtlı sicil kayıdınız bulunmamaktadır.`) }
  
      let sicilinfo = penals.cek(`sicil.${button.clicker.member.id}.${config.guild.server}`);
     
    let sicilimm = sicilinfo.length > 0 ? sicilinfo.map((value, index) => ` **[${value.komut}]** \`${value.zaman}\` tarihinde **${value.sebep}** nedeniyle <@${value.mod}> tarafından cezalandırıldı. **#${value.id}**`).join("\n") : "".catch()
  
          if(sicilsayi >= 7) {
              await button.reply.edit(`**${client.guilds.cache.get(config.guild.server).name}** sunucusunda kayıtlı **7'den fazla** cezanız bulunduğu için listelenememektedir, \`${config.client.prefix}sicil\` komutu ile detaylı bilgi alabilirsiniz`)
                      } else {
              await button.reply.edit(`**${client.guilds.cache.get(config.guild.server).name}** sunucusunda kayıtlı tüm cezalarınız aşağıda listenmiştir;
  
  ${sicilimm}`)
  }
  }
  
  
      // Button6
      if (button.id === '6') {
          await button.think(true);
          await button.reply.edit(`${button.clicker.member.roles.cache.size <= 5 ? button.clicker.member.roles.cache.filter(x => x.name !== "@everyone").map(x => x).join(', ') : `Listelenemedi! (${button.clicker.member.roles.cache.size})`}`)
  }
  
  
      // Button7
      if (button.id === '7') {
          await button.think(true);
          await button.reply.edit(`10 saniye sonra kayıtsıza atılacaksınız!`).then(x => funcs.kayitSil(button.clicker.member), 10000)
  }
  
  
      // Button8
      if (button.id === '8') {
          await button.think(true);
          await button.reply.edit(`BOTLARI RİCHARD YAPTI BU KADAR BİLGİ YETER XDDDD`)
  }
  
  
      // Button9
      if (button.id === '9') {
          await button.think(true);
          let discordRegister = moment
          .utc(client.guilds.cache.get(config.guild.server).members.cache.get(button.clicker.member.id).user.createdAt)
          .format("**DD/MM/YYYY**")
          .replace("Monday", `**Pazartesi**`)
          .replace("Tuesday", `**Salı**`)
          .replace("Wednesday", `**Çarşamba**`)
          .replace("Thursday", `**Perşembe**`)
          .replace("Friday", `**Cuma**`)
          .replace("Saturday", `**Cumartesi**`)
          .replace("Sunday", `**Pazar**`)
          .replace("January", `**Ocak**`)
          .replace("February", `**Şubat**`)
          .replace("March", `**Mart**`)
          .replace("April", `**Nisan**`)
          .replace("May", `**Mayıs**`)
          .replace("June", `**Haziran**`)
          .replace("July", `**Temmuz**`)
          .replace("August", `**Ağustos**`)
          .replace("September", `**Eylül**`)
          .replace("October", `**Ekim**`)
          .replace("November", `**Kasım**`)
          .replace("December", `**Aralık**`);
          await button.reply.edit(discordRegister)
  }  
  
  });
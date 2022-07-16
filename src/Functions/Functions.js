const {Discord,MessageEmbed} = require('discord.js');

/*
const calmdb = global.calmdb = new Veritabani("./SRC/Models/CalmDown.json");
const gamedb = global.gamedb = new Veritabani("./SRC/Models/Game.json");
const guarddb = global.guarddb = new Veritabani("./SRC/Models/Guard.json");
const invitedb = global.invitedb = new Veritabani("./SRC/Models/Invite.json");
const memberdb = global.memberdb = new Veritabani("./SRC/Models/Member.json");
const penals = global.penals = new Veritabani("./SRC/Models/penals.json");
const serverdb = global.serverdb = new Veritabani("./SRC/Models/Server.json");
const statdb = global.statdb = new Veritabani("./SRC/Models/Stat.json");
const upstaffdb = global.upstaffdb = new Veritabani("./SRC/Models/UpStaff.json");
*/

class ModerationFx {    
    ////////////// EMBED KATEGORİSİ //////////////
    static embedOlustur(uye, kanal, aciklama, color) {
        return kanal.send(new MessageEmbed()
    .setDescription(aciklama)
    .setColor(color)
    .setFooter(config.client.footer)
    .setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));
    
      }   
      static embedBasari(uye, kanal, aciklama) {
       return kanal.send(new MessageEmbed()
       .setDescription(aciklama)
       .setColor("#00ff00")
       .setFooter(config.client.footer)
       .setAuthor(uye.tag, uye.avatarURL({dynamic: true, size: 2048}))); 
      }
      static embedHata(uye, kanal, aciklama) {
        return kanal.send(new MessageEmbed()
    .setDescription(aciklama)
    .setColor("#ff0000")
    .setFooter(config.client.footer)
    .setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));
      }   
    ////////////// EMBED KATEGORİSİ //////////////

////////////// CEZA KATEGORİSİ //////////////
/*static cezaEkle(cezanumarasi, uye, uyename, yetkili, yetkiliid, tur, sebep, sure, as, bz, veritipi) {
  let server = config.guild.server;
  let cezalar = {  mod: yetkili, 
  sebep: sebep, 
  uye: uye,
  kisi: uyename, 
  id: cezanumarasi, 
  durum: `✔️ [AKTIF]`,
  zaman: as,
  bitis: bz, 
  komut: tur 
  };
    penals.ayarla(`cezalar.${cezanumarasi}.${server}`, cezalar);

    if(veritipi === "chatmute") {
penals.ekle(`cezapuan.${uye.id}.${server}`, 10);
penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.guild.server).puanlog(yetkiliid, uye, puan, "chatmute", "puan-log")
    } else if(veritipi === "voicemute") {
penals.ekle(`cezapuan.${uye.id}.${server}`, 10);
penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.guild.server).puanlog(yetkiliid, uye, puan, "voicemute", "puan-log")
    } else if(veritipi === "jail") {
penals.ekle(`cezapuan.${uye.id}.${server}`, 20);
penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.guild.server).puanlog(yetkiliid, uye, puan, "jail", "puan-log")
    } else if(veritipi === "ban") {
penals.ekle(`cezapuan.${uye.id}.${server}`, 60);
penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.guild.server).puanlog(yetkiliid, uye, puan, "ban", "puan-log")
    } else if(veritipi === "warn") {
penals.ekle(`cezapuan.${uye.id}.${server}`, 5);
penals.ekle(`cezasayi.${uye.id}.${server}`, 1);
let puan = penals.cek(`cezapuan.${uye.id}.${server}`);
client.guilds.cache.get(config.guild.server).puanlog(yetkiliid, uye, puan, "warn", "puan-log")
    } 
}*/
////////////// CEZA KATEGORİSİ //////////////
    static test() {
}

}
module.exports = ModerationFx;

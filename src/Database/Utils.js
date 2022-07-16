const { GuildMember, Guild, TextChannel, Message, MessageEmbed, ReactionCollector } = require("discord.js");
const Webhooklar = {};

Promise.prototype.sil = function(time) {
    if (this) this.then(s => {
        if (s.deletable) s.delete({ timeout: time }).catch(e => {});
    });
};

Guild.prototype.kanalBul = function(kanalisim) {
    let kanal = this.channels.cache.find(k => k.name === kanalisim)
    return kanal;
}

Guild.prototype.log = async function log(cezaID, yetkili, uye, sebep, as, bz, tip, channelName) {
    let channel = this.channels.cache.find(x => x.name === channelName);
    let tur;
    if(tip === "chatmute") tur = "metin kanallarından susturuldu!"
    if(tip === "voicemute") tur = "ses kanallarından susturuldu!"
    if(tip === "jail") tur = "cezalandırıldı!"
    if(tip === "warn") tur = "uyarıldı!"
    if(tip === "ban") tur = "yasaklandı!"
    if (channel) {
    funcs.embedOlustur(yetkili, channel, `${uye} adlı üye **${sebep}** sebebi ile ${yetkili} tarafından ${tur} **[**\`#${cezaID}\`**]**

➸ Ceza Sebebi: \`${sebep}\`
➸ Atılma tarihi: \`${as}\`
➸ Bitiş tarihi: \`${bz}\``, "RANDOM")
    }
}

Guild.prototype.puanlog = async function puanlog(yetkili, uye, miktar, tip, channelName) {
    let channel = this.channels.cache.find(x => x.name === channelName);
    let tur;
    if(tip === "chatmute") tur = "yazılı kanallarda susturulduğu için **+10** alarak"
    if(tip === "voicemute") tur = "ses kanallarda susturulduğu için **+10** alarak"
    if(tip === "jail") tur = "cezalandırıldığı için **+20** alarak"
    if(tip === "warn") tur = "uyarıldığı için **+5** alarak"
    if(tip === "ban") tur = "yasaklandığı için **+60** alarak"
    if (channel) {
        funcs.embedOlustur(yetkili, channel, `<@${uye}> adlı üye <@${yetkili}> tarafından ${tur} \`${miktar} Puan\` oldu!`, "RANDOM")
    }
}
Guild.prototype.unlog = async function unlog(cezaID, yetkili, uye, sebep, as, bz, tip, channelName) {
    let channel = this.channels.cache.find(x => x.name === channelName);
    let tur;
    if(tip === "chatmute") tur = "metin kanallarındaki susturulması bitti!"
    if(tip === "voicemute") tur = "sesli kanallardaki susturulması bitti!"
    if(tip === "jail") tur = "cezası bitti!"
    if (channel) {
        funcs.embedOlustur(yetkili, channel, `${uye} adlı üyenin ${yetkili} tarafından atılan ${tur}. **[**\`#${cezaID}\`**]**`, "RANDOM")
    }
}

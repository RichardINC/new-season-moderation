const { Discord, MessageEmbed } = require("discord.js");
const moment = require("moment");
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports.config = {
    name: "infosetup",
    aliases: [],
    usage: "Kullanıcı Bilgi"
};

module.exports.execute = async(client, message, args) => {

    ///////////////////

    let sayi1 = new MessageButton()
    .setID("1")
    .setLabel("1")
    .setStyle("gray");
    
    let sayi2 = new MessageButton()
    .setID("2")
    .setLabel("2")
    .setStyle("gray");
    
    let sayi3 = new MessageButton()
    .setID("3")
    .setLabel("3")
    .setStyle("gray");
    
    let sayi4 = new MessageButton()
    .setID("4")
    .setLabel("4")
    .setStyle("gray");
    
    let sayi5 = new MessageButton()
    .setID("5")
    .setLabel("5")
    .setStyle("gray");
    
    let sayi6 = new MessageButton()
    .setID("6")
    .setLabel("6")
    .setStyle("gray");
    
    let sayi7 = new MessageButton()
    .setID("7")
    .setLabel("7")
    .setStyle("gray");
    
    let sayi8 = new MessageButton()
    .setID("8")
    .setLabel("8")
    .setStyle("gray");
    
    let sayi9 = new MessageButton()
    .setID("9")
    .setLabel("9")
    .setStyle("gray");
    
    const row1 = new MessageActionRow().addComponents(sayi1, sayi2, sayi3)
    const row2 = new MessageActionRow().addComponents(sayi4, sayi5, sayi6)
    const row3 = new MessageActionRow().addComponents(sayi7, sayi8, sayi9)

message.channel.send(`Aşağıdaki menüden kendinize bir işlem seçip sunucu içinde depolanan verilerinizi öğrenebilirsiniz.

**~** 1: Sunucuya giriş tarihinizi öğrenin.
**~** 2: Kayıt olmuş olduğunuz isimleri öğrenin. 
**~** 3: Sunucu istatistiğini öğrenin. 

**~** 4: Son cezanızı öğrenin. 
**~** 5: Geçmiş cezalarınızı öğrenin.
**~** 6: Üstünüzde bulunan rollerin listesini alın.

**~** 7: Tekrar sesli kayıt olun.
**~** 8: Sunucumuz hakkında kısa bilgilendirme alabilirsin.
**~** 9: Hesabınızının açılış tarihini öğrenin.`, { components: [ row1, row2, row3]})  


}
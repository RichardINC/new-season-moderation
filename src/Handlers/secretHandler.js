const Discord = require('discord.js');
const Veritabani = require("richard.db");
const fs = require("fs");

class secret {

    static mesaj(embed, sahip, kanal, mesaj, süre) {
        let sure;
        if(süre) {sure = süre} else {sure = 9999999}

        if(embed === "true") {
        funcs.embedOlustur(sahip, kanal, mesaj, "RANDOM").sil(sure);
                             } else {
        kanal.send(mesaj).sil(sure)
                             }

    }

    static hata(embed, sahip, kanal, mesaj, süre) {
        let sure;
        if(süre) {sure = süre} else {sure = 9999999}

        if(embed === "true") {
        funcs.embedOlustur(sahip, kanal, mesaj, "RED").sil(sure);
                             } else {
        kanal.send(mesaj).sil(sure)
                             }

    }

    static basari(embed, sahip, kanal, mesaj, süre) {
        let sure;
        if(süre) {sure = süre} else {sure = 9999999}

        if(embed === "true") {
        funcs.embedOlustur(sahip, kanal, mesaj, "GREEN").sil(sure);
                             } else {
        kanal.send(mesaj).sil(sure)
                             }
    }

}
module.exports = secret;

const Discord = require('discord.js');
const Veritabani = require("richard.db");
const fs = require("fs");

class login {

    static setup() {
        client.login(config.client.token).catch(err => console.error("Discord API Botun tokenini doğrulayamadı."));
    }
}
module.exports = login;

const Discord = require('discord.js');
const Veritabani = require("richard.db");
const fs = require("fs");

class globalFunctions {

    static setup() {
    const memberdb = global.memberdb = new Veritabani("./src/Models/Member.json");
    const penals = global.penals = new Veritabani("./src/Models/Penals.json");
    const serverdb = global.serverdb = new Veritabani("./src/Models/Server.json");
    const richardbase = global.richardbase = new Veritabani("./src/Models/Richard.json");
    const staffdb = global.staffdb = new Veritabani("./src/Models/Staff.json");
}
}
module.exports = globalFunctions;

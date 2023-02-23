const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
console.log(`${client.user.tag} Aktif! ✔️`)
client.user.setActivity(`h-yardım | h-davet`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./src/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} Tane Komut Bulunmakta ➕`);
files.forEach(f => {
let props = require(`../src/${f}`);
    
console.log(`${props.help.name} Adlı Komut Aktif 🌀`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});

require('dotenv').config();
module.exports = {
    name: "ready",
    settings: {
        once: false
    },
    run: (client) => {
        console.warn(client.user.tag + ' Bot Aktif.');
        console.info(client.user.tag + ' Bot Aktif.');
        console.log(client.user.tag + ' Bot Aktif.');

        client.user.setPresence({ activities: [{ name: process.env.DURUM, type: 2 }], status: 'online' })
    }
}


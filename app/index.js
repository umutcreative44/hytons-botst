const { Client, GatewayIntentBits, Partials, } = require("discord.js");
const config = require("./config.js");
const OPCommands = require("opcommands");
const { EmbedBuilder } = require('discord.js');

const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(config.token || process.env.TOKEN).catch(e => {
console.log("İntentler Kapalı!")
})

client.on("userUpdate", (oldUser, newUser) => {
  let log = "1034247437654704178";
  if (oldUser.avatar !== newUser.avatar)
    client.channels.cache.get(log).send(oldUser.displayAvatarURL());
  if (oldUser.avatar !== newUser.avatar)
    client.channels.cache.get(log).send(newUser.displayAvatarURL());
});

client.on("messageCreate", async message => {
    let csl = "1034247437654704178"
    if(message.author.id === client.user.id) return;
    if(!message.guild) { 
  client.channels.cache.get(csl).send({embeds: [new EmbedBuilder()
    .setAuthor({name: 'Yeni DM Geldi!'})
    .setFooter({text: 'HADIN DM-LOGS'})
    .setDescription(`Gönderen kişi:   ${message.author.tag}`)
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL())
    .addFields({ name:"Mesajı;", value: message.content })
]
})
    }
    })

client.on("ready", () => {
const guild = client.guilds.cache.random()  
const channel = client.channels.cache.get("1034247437654704178");
let csd = require("discord.js")
setInterval(() => {
const guild = client.guilds.cache.random()  
var randomMembers = guild.members.cache.random().user;
channel.send({ embeds: [new csd.EmbedBuilder()
.setTitle(guild.name)
.setImage(randomMembers.displayAvatarURL({ dynamic: true }))
.setColor(csd.Colors.Blue)]})
}, 10000);
});

client.on('guildMemberAdd', member => {
  member.send(`${client.author.id} **Hoşgeldin!**
  
  Bu **Sihirli Dünyada** Benle Olmaya Varmısın ?

AAA Evet Tabikide **Varsın!**

Eeee O Zaman Sunucuya **Hoşgeldin.**`).catch(err => console.log(err));
})

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
if (process.env.token) {
    void client.login(process.env.token);
}; 
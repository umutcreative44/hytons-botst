const {EmbedBuilder} = require('discord.js')

exports.run = async (client, message, args) => {

let animEmotes = [], staticEmotes = [];
message.guild.emojis.cache.forEach((x) => {
x.animated ? animEmotes.push(`<a:${x.name}:${x.id}>`) : staticEmotes.push(`<:${x.name}:${x.id}>`);
})

const msg = new EmbedBuilder()
.setTitle(`${message.guild.name} Sunucusunun Emojileri`)
.setFooter(`Bot Çalınır İse Faliho'ya DM Atınız.`)
.setColor("#d7aaff")
.setDescription(`**${message.guild.name} Hareketsiz;** ${animEmotes} \n\n **${message.guild.name} Hareketli;** ${staticEmotes}`)
message.reply({embeds : [msg]}).catch(error => {message.reply('Emojileri Atamıyorum Sistemde Hata Olabilir')})

    };
exports.conf = {
  aliases: ['emojiler', 'emoji-bilgi']
};

exports.help = {
  name: "emojibilgi"
};
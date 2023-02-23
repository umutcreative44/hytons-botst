const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
  
  let kisi = message.mentions.users.first() || client.users.cache.get(args[0]) 
  if (!kisi) return message.reply("<:hayir2:1034206492439625848> **Birini Etiketler Misin ?**");
  
  if (kisi.id === message.author.id) return message.reply("**Aga be Okadarmı Lan Gel Kanka Sana Bulalım.**");
  
    const cm = Math.floor(Math.random(100) * 100);

    const embed = new EmbedBuilder()
    .setDescription("<@" + message.author.id + "> **Kanka** <@"+kisi.id+"> **İle Aşkınız** \`%"+cm+"\` **Çıktı!**")
    .setColor("#d7aaff")
    .setImage('https://media.tenor.com/HiuJ89jCG6EAAAAC/cartoon-skaroy.gif')
message.channel.send({content: "Seçilen Kişi Bak Buraya <@"+kisi.id+">", embeds: [embed]});

};
exports.conf = {
  aliases: ["aşkölçer"]
};

exports.help = {
  name: "aşk-ölçer"
};
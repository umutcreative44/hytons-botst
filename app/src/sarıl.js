const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let kisi = message.mentions.users.first() || client.users.cache.get(args[0]) 
  if (!kisi) return message.reply("<:hayir2:1034206492439625848> **Kime Sarlıcağını Etiketler Misin ?**");

  if (kisi.id === message.author.id) return message.reply("**Aga be Okadarmı Lan Gel Kanka Sana Bulalım.**");
 
    const embed = new Discord.EmbedBuilder()
      .setDescription("<@"+kisi.id+"> **Sana** <@" + message.author.id + "> **Sarıldı!**")
      .setColor("#d7aaff")
      .setImage("https://c.tenor.com/hsbgSPW28K8AAAAC/baby-hug.gif");
    message.channel.send({content: "Seçilen Kişi Bak Buraya <@"+kisi.id+">", embeds: [embed]});

};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "sarıl"
};
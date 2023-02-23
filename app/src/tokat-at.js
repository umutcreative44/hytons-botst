const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let kisi = message.mentions.users.first() || client.users.cache.get(args[0]) 
  if (!kisi) return message.reply("<:hayir2:1034206492439625848> **Kimi Tokatlicağını Etiketler Misin ?**");

  if (kisi.id === message.author.id) return message.reply("**Aga be Okadarmı Lan Gel Kanka Sana Tokat Atacak Arkadaş Bulalım.**");
 
    const embed = new Discord.EmbedBuilder()
      .setDescription("<@"+kisi.id+"> **Sana** <@" + message.author.id + "> **Tokat Attı!**")
      .setColor("#d7aaff")
      .setImage("https://media.tenor.com/VOjNThrLzO8AAAAd/recep-ivedik-slap-recep-ivedik-tokat.gif");
    message.channel.send({content: "Kanka Valla Çok İyi Sarsıldın :D <@"+kisi.id+">", embeds: [embed]});

};
module.exports.conf = {
  aliases: ["tokatat", "tokat"]
};

module.exports.help = {
  name: "tokat-at"
};
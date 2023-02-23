const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

  const cm = Math.floor(Math.random(100) * 100);

    const embed = new EmbedBuilder()
    .setDescription(`**Senin Malafat** \`%${cm}\` **Boyutunda Çıktı Usta**`)
    .setColor("#d7aaff")
    .setImage('https://cdn.glitch.me/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2Feggplant-transparent-animated-gif-3.gif')
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["kaç-cm"]
};

exports.help = {
  name: "kaçcm"
};
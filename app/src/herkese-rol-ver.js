const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    var rol = message.mentions.roles.first()
    if(!rol) message.reply("<:hayir2:1034206492439625848> Dostum Rol Belirtir Misin ?")
    message.guild.members.cache.forEach(arez => arez.roles.add(rol.id))
    return message.reply(`<:evet:1034206491244241036>  **Bu Sunucudaki Herkese** \`${rol.id}\` **Adlı Rolü Teker Teker Veriyorum.**`)

};
exports.conf = {
  aliases: ["herkese-rol-ver", "herkese-rolver"]
};

exports.help = {
  name: "herkeserolver"
};
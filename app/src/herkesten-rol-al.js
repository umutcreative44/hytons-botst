const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    var rol = message.mentions.roles.first()
    if(!rol) message.reply("<:hayir2:1034206492439625848> Dostum Rol Belirtir Misin ?")
    message.guild.members.cache.forEach(arez => arez.roles.remove(rol.id))
    return message.reply(`<:evet:1034206491244241036>  **Bu Sunucudaki Herkesden** \`${rol.id}\` **Adlı Rolü Teker Teker Alıyorum.**`)

};
exports.conf = {
  aliases: ["herkesten-rol-al", "herkesten-rolal"]
};

exports.help = {
  name: "herkestenrolal"
};
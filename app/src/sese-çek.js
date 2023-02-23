const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
  let me = message.guild.members.cache.get(client.user.id);
if (!me.permissions.has("0x0000000000000004"))
return message.reply({ content: "\`●\` <:hayir2:1034206492439625848> Yetkim Bulunmamakta." }).catch((err) => {});
  
  if (!message.member.permissions.has("0x0000000000000004"))
    return message.reply("\`●\` <:hayir2:1034206492439625848> Dostum Yetkin Yok Niye Deniyorsun ?");

  if (!message.member.voice.channel)
    return message.reply("\`●\` <:hayir2:1034206492439625848> Dostum Ses Kanalına Girer Misin ?");
  let csm = message.mentions.members.first();
  if (!csm)
    return message.reply(
      "\`●\` <:hayir2:1034206492439625848> Birisini Etiketler Misin ?"
    );
  if (!csm.voice.channel)
    return message.reply("\`●\` <:hayir2:1034206492439625848> Etiketlediğin Kişi Ses Kanalında Bulunmamakta.");

  csm.voice.setChannel(message.member.voice.channelId)
  message.channel.send("<:evet:1034206491244241036>  <@"+csm + "> Adlı Arkadaşı Başarı İle Taşıdım!");
};

exports.conf = {
  aliases: ["sese-çek", "ses-çek", "seseçek", "sesçek"]
};

exports.help = {
  name: "çek"
};
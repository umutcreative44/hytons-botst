const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (!message.member.permissions.has("0x0000000000000008")) return message.reply('<:hayir2:1034206492439625848>> **-** \`Yönetici\` **Yetkin Olmadan Ses Kanalı Açamazsın!**');

if (args.slice(0).join(' ').length < 1) return message.reply('<:hayir2:1034206492439625848> **Oluşturcağımın Kanalı Ne Olsun? Örnek :** \`h-ses-kanal-aç Faliho\` **Gibi!**'); 

await message.guild.channels.create({
name: args.slice(0).join(' '),
type: Discord.ChannelType.GuildVoice,
permissionOverwrites: []
}).catch(async err => {
return message.reply('<:hayir2:1034206492439625848> **Kanal Oluşturulurken Hata Meydana Geldi.**').catch(err => { })
})
return message.channel.send("<:evet:1034206491244241036>  **Kanal Başarıyla Oluşturuldu.**");
};

exports.conf = {
aliases: ["seskanalı-aç", "ses-kanalıaç", "seskanalıaç", "ses-kanalı-aç"]
}; 

exports.help = {
name: 'ses-kanal-aç'
};
const Discord = require('discord.js');
exports.run = async(client, message, args) => {

if(!message.member.permissions.has("0x0000000000000008")) return message.channel.send(`<:hayir2:1034206492439625848> \`Yönetici\` **Yetkin Yok Bro!**`)

let mesaj = args[0]
if (!mesaj) return message.channel.send('<:hayir2:1034206492439625848> Birşey Yaza Bilir Misin ?')

await message.delete()

const mesajat = new Discord.EmbedBuilder()
.setColor('#d7aaff')
.setDescription(args.slice(0).join(' '))

message.guild.members.cache.map(async user => {
await user.send({ embeds: [mesajat] }).catch(e => {})
})

await message.channel.send(`<:hayir2:1034206492439625848> DM Den Mesajı Başarı İle Gönderdim!`)

}

exports.conf = {
aliases: ['duyurlaherkese', 'dmduyuru', 'dm-duyuru']
}

exports.help = {
name: 'duyurherkes'
}
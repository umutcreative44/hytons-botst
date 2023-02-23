exports.run = async (client, message, args, Discord) => {

if (!message.member.permissions.has("0x0000000000000004"))
return message.reply({ content: "<:hayir2:1034206492439625848> **-** \`Yönetici\` **Yetkin Olmadan Banlayamazsın!**" }).catch((err) => {});

let me = message.guild.members.cache.get(client.user.id);
if (!me.permissions.has("0x0000000000000004"))
return message.reply({ content: "\`●\` <:hayir2:1034206492439625848> **Yetkim Bulunmamakta.**" }).catch((err) => {});

let sebep = args.slice(1).join(" ") || "Belirtilmemiş";
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if (!member) return message.reply({content: "\`●\` <:hayir2:1034206492439625848> **Kimi Banlicağını Etiketler Misin ?**" }).catch((err) => {});

if (message.guild.ownerId === member.id) return message.reply({ content: "\`●\` <:hayir2:1034206492439625848> **Sunucu Sahibini Banlamayı Denemek ?**" }).catch((err) => {});
if (message.author.id === member.id)return message.reply({ content: "\`●\` <:hayir2:1034206492439625848> **Dostum Kendini Banlayamazsın!**" }).catch((err) => {});
if (client.user.id === member.id) return message.reply({ content: "\`●\` <:hayir2:1034206492439625848> **Beni Banlamak Ha!**" }).catch((err) => {});

if (message.guild.ownerId !== message.author.id) {
if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply({ content: "\`●\` <:hayir2:1034206492439625848> Bu Kişiyi Banlayamazsın! Rolü Senden Yüksekte." }).catch((err) => {});
}

if (member.roles.highest.position >= me.roles.highest.position)return message.reply({ content: "\`●\` <:hayir2:1034206492439625848> Kullanıcının rolü benim rolümden yüksek." }).catch((err) => {});


message.guild.members.ban(member, { reason: `By: ${message.author.tag} Reason: ` + sebep || "Belirtilmemiş" }).then(() => {
message.reply({ content: `\`●\` <:evet:1034206491244241036>  **Başarıyla** <@${member.id}> **Adlı Şahıs Banlandı!**` })
}).catch((e) => {
message.reply({ content: `\`●\` <:hayir2:1034206492439625848>> **Başarısız!** Kullanıcıyı sunucudan banlarken hata aldım. \n**Hata:** \`\`\`${e.name + ": " + e.message}\`\`\`` }).catch((err) => {});
});
  

}
exports.conf = {
aliases: []
};

exports.help = {
name: "ban"
}; 
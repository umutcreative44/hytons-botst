const { EmbedBuilder } = require("discord.js");

exports.run = async (client, message, args) => { 
  
if (!message.member.permissions.has("0x0000000000000004"))
return message.reply({ content: "<:hayir2:1034206492439625848> **-** \`Yönetici\` **Yetkin Olmadan Kuralları Kullanamazsın.**" }).catch((err) => {})

message.reply(`📢 \`${message.guild.name}\` **Sunucu Kurallar**

\`¤\` **Reklam** Sunucu **İçi** Yasaktır. **(Yetkililere bildirmelisiniz.)**
\`¤\` **Ses** & **Chat** odalarında **Küfür**, **Troll**, **Rahatsız** etmek & **Bass** Yasaktır.
\`¤\` Kişisel sorunlarınızı **sunucuya** taşımak, Düzeni **bozmak**, Çıkan **tartışmayı** uzatmak Yasaktır.
\`¤\` **Din**, **dil**, **ırk**, Cinsiyetçilik ayrımı Yasak.
\`¤\` **Cinsel içerikli** görseller paylaşmak Yasaktır.
\`¤\` **Spam**, **flood** ve **caps** Yasaktır.

\`¤\` **Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.**

> \`Sunucuya Kayıt Olan Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır, Teşekkürler.\`
`) 

};
exports.conf = {
aliases: ["rules2"] 
}

exports.help = {
name: 'kurallar2' 
}
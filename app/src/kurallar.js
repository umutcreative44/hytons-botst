const { EmbedBuilder } = require("discord.js");

exports.run = async (client, message, args) => { 
  
if (!message.member.permissions.has("0x0000000000000004"))
return message.reply({ content: "<:hayir2:1034206492439625848> **-** \`Yönetici\` **Yetkin Olmadan Kuralları Kullanamazsın.**" }).catch((err) => {})

message.reply(`***${message.guild.name} Kuralları***

📰 **Reklam**
• Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve her şekilde reklam yasaktır.
• Kullanıcı adını ya da Profil fotoğrafını reklam içerecek şekilde koymak yasaktır.

📋 **Discord Hizmet Koşulları ve Topluluk İlkeleri**
• \`https://discord.com/terms\` ve \`https://discord.com/guidelines\` ihlal etmek yasaktır.

🔞 **Yaş sınırı**
• Bu sunucuda olabilmek için en az Discord Kurallarına göre 13 yaşında olmalısınız.

📒 **Kanallar**
• 🔩・komut kanalı haricinde komut kullanımı yasaktır.
• Kanallar adlarına göre kullanılmalıdır.

🧢 **Yetkililer ve Yetki**
• Yetki talep etmek yasaktır.
• Sürekli olarak bir yetkiliyi @etiketlemek yasaktır.

🗣️ **Konuşma**
• Bir kelimeyi sürekli olarak fazlasıyla tekrarlamak yasaktır.
• Alt alta mesajlar atmak yasaktır.
• Devamlı olarak emoji gönderimi yasaktır.
• Cinsel içerikli ve Rahatsız edici sohbet yasaktır.
• Bir şahsın görüşlerine, tercihlerine ve zevklerine saygısızlık yasaktır.
• Bir şahsı onu rahatsız edecek şekilde bilgilerini paylaşmak yasaktır.
• Her türlü küfür, argo, hakaret, aşağılayıcı ve alaycı mesajlar yasaktır.

🖼️ **Paylaşım ve İçerik**
• Aşağılayıcı, Rahatsız edici, Zararlı ve Reklam içerikli bağlantı, dosya ve medya gönderimi yasaktır.

🤬 **Kavga ve Tartışma**
• Bir kişinin görüşünü, şahsını ve tercihlerini etkileyecek şekilde tartışmak yasaktır.
• Tartışma sırasında küfür ve aşağılayıcı şekilde tartışmak yasaktır.
• Kavga etmek ve kavgaya dahil olmak yasaktır.`) 

};
exports.conf = {
aliases: ["rules"] 
}

exports.help = {
name: 'kurallar' 
}
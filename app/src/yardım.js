const Discord = require(`discord.js`);
const os = require(`os`);
exports.run = async (client, message, args) => {
  
  const up = os.uptime()

    let supports = "https://discord.gg/meuhW29N9R";
    let website = "https://discord.gg/meuhW29N9R";

    let link_button = new Discord.ActionRowBuilder().addComponents(
        new Discord.ButtonBuilder()
        .setLabel('Davet Et')
        .setStyle(Discord.ButtonStyle.Link)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=1034231896709795860&permissions=8&scope=bot%20applications.commands`),
        new Discord.ButtonBuilder()
        .setLabel('Destek Sunucusu')
        .setStyle(Discord.ButtonStyle.Link)
        .setURL(supports),
        new Discord.ButtonBuilder()
        .setLabel('Web Sitesi')
        .setStyle(Discord.ButtonStyle.Link)
        .setURL(website));

const cs = new Discord.EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
.setTitle('<:HamgonModerasyon:1034246407936299058> Ana Menü;')
.setColor("#d7aaff")
.setDescription(`__**@HYTON**__ rolünü en yukarıya koyarak kullanınız.
**- Kullanılabilir Prefixler:** __h-__
**- Aktif Süre:** __${Math.floor(up / 60)} Dakika__`)
.addFields([
{ name: "<:HangomBan:1034246413137231882> Yardım Komutları;", value: `**Aşşağıdadır.**`},
  
{ name: "<:HangomBan:1034246413137231882> h-sistemler", value: `\`Sistem Menüsüdür.\``, inline: true },
{ name: "<:HangomBan:1034246413137231882> h-kullanıcı", value: `\`Kullanıcı Menüsüdür.\``, inline: true },
{ name: "<:HangomBan:1034246413137231882> h-guard", value: `\`Guard Menüsüdür.\``, inline: true },
  
{ name: "<:HangomBan:1034246413137231882> h-moderasyon", value: `\`Moderasyon Menüsüdür.\``, inline: true },
{ name: "<:HangomBan:1034246413137231882> h-bot", value: `\`Bot Menüsüdür.\``, inline: true },
{ name: "<:HangomBan:1034246413137231882> h-eğlence", value: `\`Eğlence Menüsüdür.\``, inline: true },
  
{ name: "<:HangomEvren:1034246420993146910> Diğer Yardım Komutları;", value: `**Aşşağıdadır.**`},
  
{ name: "<:HangomEvren:1034246420993146910> h-diğer", value: `\`Diğer Menüsüdür.\``, inline: true },
{ name: "<:HangomEvren:1034246420993146910> h-yardım2", value: `\`Yardım2 Menüsüdür.\``, inline: true },

{ name: "<:HamgonKristal:1034246404337569902> Premium Komutları;", value: `**Aşşağıdadır.**`},
  
{ name: "<:HamgonKristal:1034246404337569902> h-premium", value: `\`Premium Fiyatlarına Bakarsınız.\``, inline: true },
{ name: "<:HamgonKristal:1034246404337569902> h-premium-satınal", value: `\`Premium Satın Almak İçin Bilgi Alırsınız.\``, inline: true },
{ name: "<:HamgonKristal:1034246404337569902> h-premium-bilgi", value: `\`Premium İle İlgili Birlgi Alırsınız.\``, inline: true }
])
.setTimestamp()
.setFooter({  text: 'Hyton Yardım', iconURL: client.user.avatarURL({}) })
await message.reply({embeds: [cs], components:[link_button]}).catch(async err => {
await message.author.send({embeds: [cs]}).catch(async err => {
return console.log(`yardım komutu hatalı çalışıyor. ${message.guild.name} isimli sunucuda yetkim olmadığı için mesaj atamıyorum.`)
})
})

};

exports.conf = {
aliases: ["yardim", "y", "help"]
};

exports.help = {
name: 'yardım'
};
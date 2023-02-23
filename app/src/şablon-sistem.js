const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
.setImage("https://cdn.glitch.global/c695cc44-54e3-493e-bde3-853093dc5333/sunucu%20olu%C5%9Fturma%20gif.gif?v=1666909639507")
        .setColor("#d7aaff")
        .setDescription("<:HamgonModerasyon:1034246407936299058> __**HYTON Sistemler**__")
        .setFooter({  text: 'Hyton Sistemler NOT: Gifde Marpel Gözükmüş MRTOL AB Telif Atma :(', iconURL: client.user.avatarURL({}) })
        
        .addFields({ name: "<:Hangomleti:1034246422138208277> h-sohbet-şablon", value: `> **Sohbet Şablonu Alıp Sunucu Kurarsınız.**`, inline: true })
        .addFields({ name: "<:Hangomleti:1034246422138208277> h-bot-şablon", value: `> **Bot Şablonu Alıp Sunucu Kurarsınız.**`, inline: true })
        .addFields({ name: "<:Hangomleti:1034246422138208277> h-youtube-şablon", value: `> **Youtube Şablonu Alıp Sunucu Kurarsınız.**`, inline: true })
        
        .addFields({ name: "<:Hangomleti:1034246422138208277> h-ekip-şablon", value: `> **Ekip Şablonu Alıp Sunucu Kurarsınız.**`, inline: true })


 

		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["şablonsistem"]
};
exports.help = {
    name: "şablon-sistem"
};
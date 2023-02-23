const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription(`<:HamgonModerasyon:1034246407936299058> \`Bot Menüsü!\``)
        .setFooter({  text: 'Hyton Bot', iconURL: client.user.avatarURL({}) })
        
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-istatistik", value: `**Botun İstatistiğine Bakarsınız.**`, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-davet", value: `**Botu Davet Edersiniz.**`, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-faliho-kimdir", value: `**Yapımcımı Tanırsınız.**`, inline: true })
        
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-ping", value: `**Botun Pinglerine Bakarsınız.**`, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-ping2", value: `**Botun Resimli Pingine Bakarsınız.**`, inline: true })

        
        .setTimestamp()
        
        


		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["b"]
};
exports.help = {
    name: "bot"
};
const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription(`<:HamgonModerasyon:1034246407936299058> \`Eğlence Menüsü!\``)
        .setFooter({  text: 'Hyton Yardım', iconURL: client.user.avatarURL({}) })
        
                                                        .addFields({ name: "Komutlar Aşşağıda!", value: `\`\`\`             \`\`\``})
        
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-sarıl", value: `**Birisine Sarılırsınız.**`, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-tokat", value: `**Birisine Tokat Atarsınız.**`, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-kaç-cm", value: `**Malafatınızın Boyuna Bakarsınız.**`, inline: true })
        
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-aşk", value: `**Aşkınızı İlan Edersiniz.**`, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-aşk-ölçer", value: `**Aşkınızı Ölçersiniz.**`, inline: true })
        
                                .addFields({ name: "Komutlar Yukarıda!", value: `\`\`\`             \`\`\``})
        
        .setTimestamp()
        
        


		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["eglence"]
};
exports.help = {
    name: "eğlence"
};
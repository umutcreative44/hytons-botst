const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message, msg, args) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription(`<:HamgonModerasyon:1034246407936299058> \`Sunucu Bilgi!\``)
        .setFooter({  text: 'Hyton Yardım', iconURL: client.user.avatarURL({}) })
        
                        .addFields({ name: "<:Hangomleti:1034246422138208277> Boost :", value: `\`${message.guild.premiumTier}\``, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> Sunucu İsmi :", value: `\`${message.guild.name}\``, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> Bu Komutu Yazdıran :", value: `\`${message.author.username}\``, inline: true })


        message.reply({embeds : [msg]}).catch(error => {message.reply('Emojileri Atamıyorum Sistemde Hata Olabilir')})
        .setTimestamp()
        
        


		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["sunucubilgi", "serverinfo", "server-info"]
};
exports.help = {
    name: "sunucu-bilgi"
};
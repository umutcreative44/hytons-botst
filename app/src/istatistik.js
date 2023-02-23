const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription("<:HamgonModerasyon:1034246407936299058> __**HYTON İstatistik**__")
        .setFooter({  text: 'Hyton İstatistik', iconURL: client.user.avatarURL({}) })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> Botun Piyasaya Sürülüş Tarihi :", value: `\`Salı 25 Kasım 2022 03:18\``, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> Botun Kendisi :", value: `<@1034231896709795860>`, inline: true })
                        .addFields({ name: "<:Hangomleti:1034246422138208277> Botun Sahibi :", value: `<@1034110211386003577>`, inline: true })
        
        
                       .addFields({ name: "<:Hangomleti:1034246422138208277> Ping :", value: `\`${client.ws.ping}\``, inline: true })
                       .addFields({ name: "<:Hangomleti:1034246422138208277> Çalışma Süresi :", value: `\`${Math.floor(up / 60)} Dakika\``, inline: true })
                       .addFields({ name: "<:Hangomleti:1034246422138208277> Sunucu Sayısı :", value: `\`${client.guilds.cache.size}\``, inline: true })

                       .addFields({ name: "<:Hangomleti:1034246422138208277> Kullanıcı Sayısı :", value: `\`${client.users.cache.size}\``, inline: true })
                       .addFields({ name: "<:Hangomleti:1034246422138208277> RAM Kullanımı :", value: `\`${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()}MB/4GB\``, inline: true })
                       .addFields({ name: "<:Hangomleti:1034246422138208277> Komut Sayısı :", value: `\`${client.commands.size}\``, inline: true })

		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["bilgi", "i"]
};
exports.help = {
    name: "istatistik"
};
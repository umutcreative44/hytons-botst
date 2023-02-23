const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
          .setTitle('Hyton Moderasyon Menüsüne Hoşgeldin!')
          .setFooter({  text: 'Hyton Moderasyon', iconURL: client.user.avatarURL({}) })
        
          .addFields({ name: "<:Hangomleti:1034246422138208277> h-ban ( @ŞahısEtiket )", value: `\`Birisini Banlamanıza Yarar.\``, inline: true })
          .addFields({ name: "<:Hangomleti:1034246422138208277> h-herkesten-rol-al ( @RolEtiket )", value: `\`Sunucudaki Herkesden Belirttiğiniz Rolü Alır.\``, inline: true })
          .addFields({ name: "<:Hangomleti:1034246422138208277> h-herkese-rol-ver ( @RolEtiket )", value: `\`Sunucudaki Herkesden Belirttiğiniz Rolü Verir.\``, inline: true })
        
          .addFields({ name: "<:Hangomleti:1034246422138208277> h-ses-kanalıaç ( Ses Kanalı İsmi )", value: `\`Bir Ses Kanalı Açarsınız.\``, inline: true })
          .addFields({ name: "<:Hangomleti:1034246422138208277> h-dm-duyuru ( Duyuru Yazısı )", value: `\`Herkese DM'Den Yazdığınız Duyuruyu Atar.\``, inline: true })
          .addFields({ name: "<:Hangomleti:1034246422138208277> h-emoji-bilgi", value: `\`Sunucudaki Emojileri Gösterir.\``, inline: true })

        
        .setTimestamp()
        
        


		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["moderation"]
};
exports.help = {
    name: "moderasyon"
};
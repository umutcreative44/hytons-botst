const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription(`<:HamgonModerasyon:1034246407936299058> \`Kullanıcı Menüsü!\``)
        .setFooter({  text: 'Hyton Kullanıcı', iconURL: client.user.avatarURL({}) })
        
                        .addFields({ name: "<:Hangomleti:1034246422138208277> h-avatar", value: `**Etiketlediğiniz Kişinin Avatarına Bakarsınız.**`, inline: true })

        
        .setTimestamp()
        
        


		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["kullanici"]
};
exports.help = {
    name: "kullanıcı"
};
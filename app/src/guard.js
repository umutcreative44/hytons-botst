const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
          .setTitle('<:HamgonModerasyon:1034246407936299058> Hyton Guard Menüsüne Hoşgeldin!')
          .setFooter({  text: 'Hyton Guard', iconURL: client.user.avatarURL({}) })
        
          .addFields({ name: "<:Hangomleti:1034246422138208277> Yakında", value: `\`...\``, inline: true })

        
        .setTimestamp()
        
        


		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["guard"]
};
exports.help = {
    name: "koruma"
};
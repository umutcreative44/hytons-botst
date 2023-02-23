const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription("<:HamgonModerasyon:1034246407936299058>> __**HYTON Sistemler**__")
        .setFooter({  text: 'Hyton Sistemler', iconURL: client.user.avatarURL({}) })
        
               .addFields({ name: "<:Hangomleti:1034246422138208277> h-şablon-sistem", value: `> **Şablonlara Bakarsınız**`, inline: true })
               .addFields({ name: "<:Hangomleti:1034246422138208277> h-kurallar-sistem", value: `> **Şablonlara Bakarsınız**`, inline: true })


 

		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["sistem"]
};
exports.help = {
    name: "sistemler"
};
const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription("<:HamgonModerasyon:1034246407936299058> __**HYTON Premium Bilgi**__")
        .setFooter({  text: 'Hyton Premium Bilgi', iconURL: client.user.avatarURL({}) })
        
                                .addFields({ name: "\`●\` Premium Bilgi :", value: `> **Şuanda Premiumumuz Bulunmamakta.**`, inline: true })


 

		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["premiumbilgi"]
};
exports.help = {
    name: "premium-bilgi"
};
const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription("<:HamgonModerasyon:1034246407936299058> __**HYTON Premium**__")
        .setFooter({  text: 'Hyton Premium', iconURL: client.user.avatarURL({}) })
        
                                .addFields({ name: "\`●\` Premium", value: `> **Şuanlık Yok Ama Çıkarsa 5TL Ve 40K Veya 50K Owo Parası Olur.**`, inline: true })


 

		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["premium"]
};
exports.help = {
    name: "premium"
};
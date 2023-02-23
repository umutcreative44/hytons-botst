const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription("<:HamgonModerasyon:1034246407936299058> __**HYTON Premium Satın Al**__")
        .setFooter({  text: 'Hyton Premium Satın Al', iconURL: client.user.avatarURL({}) })
        
                                .addFields({ name: "\`●\` Premium Satın Alma :", value: `> **Faliho Ya Ulaşıp Owo Ya Da Para Vermen Lazım Owo : 50K Para : 5TL!**.`, inline: true })


 

		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["premiumsatınal"]
};
exports.help = {
    name: "premium-satınal"
};
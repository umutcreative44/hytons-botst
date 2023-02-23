const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
      
      const start = Date.now();

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription(`<:HamgonModerasyon:1034246407936299058> \`Bot Menüsü!\``)
        .setFooter({  text: 'Hyton Yardım', iconURL: client.user.avatarURL({}) })
        
                        .addFields({ name: "<:Hangomleti:1034246422138208277> Bot Ping", value: `${client.ws.ping}MS`})
                        .addFields({ name: "<:Hangomleti:1034246422138208277> Message Ping", value: `${Date.now() - start}MS`})
                        .addFields({ name: "<:Hangomleti:1034246422138208277> API Ping", value: `${Math.round(client.ws.ping)}MS`})
                         

        
        .setTimestamp()
        
        


		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["gecikme"]
};
exports.help = {
    name: "ping"
};
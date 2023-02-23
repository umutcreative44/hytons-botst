const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription(`<:HamgonModerasyon:1034246407936299058> \`Davet Menüsü!\`
                
                <:Hangomleti:1034246422138208277> **[Yöneticili Davet](https://discord.com/api/oauth2/authorize?client_id=1034231896709795860&permissions=8&scope=bot%20applications.commands)**
                \`\`\`https://discord.com/api/oauth2/authorize?client_id=1034231896709795860&permissions=8&scope=bot%20applications.commands\`\`\`
               <:Hangomleti:1034246422138208277> **[Rollü Davet](https://discord.com/api/oauth2/authorize?client_id=1034231896709795860&permissions=4398046511095&scope=bot%20applications.commands)**
                \`\`\`https://discord.com/api/oauth2/authorize?client_id=1034231896709795860&permissions=4398046511095&scope=bot%20applications.commands\`\`\`
                <:Hangomleti:1034246422138208277> **[Rolsüz Davet](https://discord.com/api/oauth2/authorize?client_id=1034231896709795860&permissions=0&scope=bot%20applications.commands)**
                \`\`\`https://discord.com/api/oauth2/authorize?client_id=1034231896709795860&permissions=0&scope=bot%20applications.commands\`\`\`
`)        .setFooter({  text: 'Hyton Davet', iconURL: client.user.avatarURL({}) })
        .setTimestamp()
        
        


		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["davet", "botdavet"]
};
exports.help = {
    name: "bot-davet"
};
const { EmbedBuilder, MessageAttachment, version } = require(`discord.js`);
const os = require(`os`);
exports.run = (client, message) => {
  
  		const up = os.uptime()

				const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("#d7aaff")
                .setDescription(`<:HamgonModerasyon:1034246407936299058> \`Kim Lan Bu Faliho ?\`

<:Hangomleti:1034246422138208277> **Faliho [Hytonun](https://discord.com/api/oauth2/authorize?client_id=1034231896709795860&permissions=8&scope=bot%20applications.commands) Yapımcısı.**

<:Hangomleti:1034246422138208277>**Faliho Discord'u :** **[Faliho#0001](https://discord.gg/meuhW29N9R)**

<:Hangomleti:1034246422138208277> **Faliho'nun Yaptığı İşler** **[Coder, Graphic Designer](https://discord.gg/meuhW29N9R)**

<:Hangomleti:1034246422138208277> **Faliho'nun Linkleri :** <:Hangomleti:1034246422138208277> **[falihoxd_](https://www.instagram.com/falihoxd_)** <:Hangomleti:1034246422138208277> **[Faliho](https://www.youtube.com/channel/UCQUgnVRu-7S7v2THTMYfzHQ)** <:Hangomleti:1034246422138208277> **[Faliho](https://open.spotify.com/playlist/2QNr9XXjfbh82YV4QDTsbb?si=cebbfce0561e4f5c)**
`)
        .setFooter({  text: 'Hyton Yardım', iconURL: client.user.avatarURL({}) })
        .setTimestamp()
        
        


		


		message.channel.send({ embeds: [embed] })

  
};
exports.conf = {
    aliases: ["faliho-kimdir"]
};
exports.help = {
    name: "falihokimdir"
};
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

exports.run = async (client, message, args) => {
let membro = message.mentions.members.first() || client.users.cache.get(args[0]) || message.author;
let avatarURL = membro.displayAvatarURL({size: 2048, dynamic: true})

const row = new ActionRowBuilder()
.addComponents(
  new ButtonBuilder()
  .setLabel('Avatar Link')
  .setEmoji('<:Hangomleti:1034246422138208277>')
  .setStyle(ButtonStyle.Link)
  .setURL(avatarURL)
)

let embed = new EmbedBuilder()
.setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL()})
.setImage(`${avatarURL}`)
.setColor("#d7aaff")
.setFooter({  text: 'Hyton Avatar', iconURL: client.user.avatarURL({}) })
message.reply({ embeds: [embed], components: [row]})
  
};
exports.conf = {
  aliases: []
};
exports.help = {
  name: "avatar"
};
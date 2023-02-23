const { EmbedBuilder } = require("discord.js");

exports.run = async (client, message, args) => { 
  
message.delete()
message.reply(`**KURALLAR SİSTEM!**

\`h-kurallar\` \`h-kurallar2\`

__***NOT: Bunları Beğenmezseniz Bana Yazın Daha Kurallar Eklerim.***__`) 

};
exports.conf = {
aliases: ["rules-system", "kurallarsistem"] 
}

exports.help = {
name: 'kurallar-sistem' 
}
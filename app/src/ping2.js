const Discord = require('discord.js')
exports.run = async(client, message, args) => {

const ping = new Discord.EmbedBuilder()
.setTitle('Hyton Ping :')
.setColor(Discord.Colors.Red)
.setImage('https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping)
.setFooter({  text: 'Hyton Ping', iconURL: client.user.avatarURL({}) })
.setTimestamp()
message.channel.send({embeds: [ping]})
}

exports.conf = {
  aliases: ['p2', 'ms2']
}

exports.help = {
  name: 'ping2'
}
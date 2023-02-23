const { EmbedBuilder } = require("discord.js");
var config = require("../config.js");
const client = require("..");
const prefix = config.prefix;

module.exports = (client) => {
	console.log(`Hyton giriş yaptı!`)
};


client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let src = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(src)) {
    cmd = client.commands.get(src);
  } else if (client.aliases.has(src)) {
    cmd = client.commands.get(client.aliases.get(src));
  }
  if (cmd) {
    cmd.run(client, message);
  }

});
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embedInfo = new Discord.RichEmbed()
.setTitle("Komendy")
.addField("/ho/help", "Jesteś tutaj!")
.addField("/ho/info", "Trochę informacji o nas")
.addField("/ho/pat", "*pat pat*")
.setColor("#8f8ff1");


return message.channel.send(embedInfo);
}

module.exports.help = {
  name: "help"
}

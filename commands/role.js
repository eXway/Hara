const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let role = message.find('role', args[0]);
let roleID = role.id;
return message.channel.send(`Proszu oto <@${roleID}>`);


}
module.exports.help = {
  name: "role"
}

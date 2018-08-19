const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let role = args[0];
if(!role) return message.reply("Podaj rolę! :c");
let roleID = role.id;
let fRole = message.guild.roles.find(`name`, role);
if (!gRole) return message.reply("Nie mogę przydzielić tobie ter roli");

if(message.user.has(fRole.id));
await(message.user.addRole(fRole.id));


return message.channel.send(`Proszu oto <@${roleID}>`);


}
module.exports.help = {
  name: "role"
}

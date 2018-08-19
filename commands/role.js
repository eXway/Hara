const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let roleUser = message.author;
let role = args[0];
if(!role) return message.reply("Podaj rolę! :c");
let roleID = role.id;
let fRole = message.guild.roles.find(`name`, role);
if (!fRole) return message.reply("Nie mogę przydzielić tobie ter roli");

if(roleUser.has(fRole.id));
await(roleUser.addRole(fRole.id));


return message.channel.send(`Proszu oto <@${roleID}>`);


}
module.exports.help = {
  name: "role"
}

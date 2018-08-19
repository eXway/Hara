const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let roleUser = message.guild.member(message.author);
let role = args[0];
if(!role) return message.reply("Podaj rolę! :c");
let fRole = message.guild.roles.find(`name`, role);
if (!fRole) return message.reply("Nie mogę przydzielić tobie tej roli");
if (
  fRole.id == 480748055604232232||
  fRole.id == 480747941724815362||
  fRole.id == 480747845700550679||
  fRole.id == 480747654251282433) {
await(roleUser.addRole(fRole.id));
return message.channel.send(`Proszu ${roleUser}, dodałeś sobie rolę ${fRole}`);
}

return message.reply(`Nie możesz mieć tej roli :c `);

}
module.exports.help = {
  name: "role"
}

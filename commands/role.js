const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let roleUser = message.guild.member(message.author);
let role = args[0];
if(!role) return message.reply("Podaj rolę! :c");
let fRole = message.guild.roles.find(`name`, role);
if (!fRole) return message.reply("Nie mogę przydzielić tobie tej roli");
if (
  fRole == "Yaoi"||
  fRole == "Biedronka"||
  fRole == "HoneyWorks"||
  fRole == "MM") {
await(roleUser.addRole(fRole.id));
return message.channel.send(`Proszu ${roleUser}, dodałeś sobie rolę ${fRole}`);
}

return message.reply(`Nie możesz mieć tej roli :c ${fRole}`);

}
module.exports.help = {
  name: "role"
}

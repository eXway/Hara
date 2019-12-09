const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let roleUser = message.guild.member(message.author);
let role = args[0];
if(!role) return message.reply("Podaj rolę! :c");
let fRole = message.guild.roles.find(`name`, role);
if (!fRole) return message.reply("nie mogę przydzielić tobie tej roli");
if (
  role == "Yaoi"||
  role == "HoneyWorks"||
  role == "MM"||
  role == "Biedronka") {
await(roleUser.addRole(fRole.id));
return message.channel.send(`Proszu ${roleUser}, dodałeś sobie rolę ${fRole}`);
}

return message.reply(`nie możesz mieć tej roli :c `);

}
module.exports.help = {
  name: "role"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let roleUser = message.guild.member(message.author);
let role = args[0];
if(!role) return message.reply("Podaj rolę! :c");
let fRole = message.guild.roles.find(`name`, role);
if (!fRole) return message.reply("nie mogę usunąć tej roli");
if (
  role == "Yaoi"||
  role == "HoneyWorks"||
  role == "MM"||
  role == "Biedronka") {
if(!roleUser.roles.has(fRole.id)) return message.reply("Ale ty już nie masz tej roli");
await(roleUser.removeRole(fRole.id));
return message.channel.send(`${roleUser}, usunąłeś rolę ${fRole}`);
}

return message.reply(`nie możesz usunąć tej roli :c `);

}
module.exports.help = {
  name: "delrole"
}

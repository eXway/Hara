const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  //if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Nie możesz tego zrobić :c");
  let rMember = `${message.member}`;
  if(!rMember) return message.reply("Nie mogę cię znaleźć");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Nie podałeś żadnej roli :c");
  if(role == "Yaoi") let gRole = "Yaoi";
  if(!gRole) return message.reply("Nie mogłem znaleźć tej roli :c");

  if(rMember.roles.has(gRole.id)) return message.reply("Nie mogę tego zrobić, ty już masz tę rolę");
  await(rMember.addRole(gRole.id));

  return rMember.send(`Gratki, dodałeś sobie rolę: ${gRole.name}`);
}

module.exports.help = {
  name: "role"
}

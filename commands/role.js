const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.replay("IF 1");
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
let role = args.join(" ").slice(22);
if(!role) return message.replay("specify a role!");
let gRole = message.guild.roles.find(`name`, role);
if(!gRole) return message.replay("nie ma roli");

if(rMember.roles.has(gRole.id));
await(rMember.addRole(gRole.id));

try{
 await rMember.send(`Gratki dostałeś role ${gRole.name}`)
}catch(e){
  message.channel.send(`Gratki dla <@${rMember.id}>, dostania ${gRole.name}`);
}
}

module.exports.help = {
  name: "role"
}

const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

let roleId = collection.find('role', args[1]);
return message.channel.send(roleId);

}

module.exports.help = {
  name: "pat"
}

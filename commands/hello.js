
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  function RANDOM (a) {
    return Math.floor((Math.random() * a));
  }
let ranHello = RANDOM(8);
if (ranHello == 0) return message.channel.send("Hej!");
if (ranHello == 1) return message.channel.send("Witaj!");
if (ranHello == 2) return message.channel.send("Miło cię tu widzieć ;v;");
if (ranHello == 3) return message.channel.send("Dzień dobry!");
if (ranHello == 4) return message.channel.send("Cieszę się, że tu jesteś ;v;");
if (ranHello == 5) return message.channel.send("Jak się masz?");
if (ranHello == 6) return message.channel.send("Jak tam u ciebie?");
if (ranHello == 7) return message.channel.send("Hej, dawno cię tutaj nie widziałam!");

}

module.exports.help = {
  name: "hello"
}

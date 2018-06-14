const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

function RANDOM(a) {
  return Math.floor(Math.random() * a);
}

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Coś jest nie tak z komendami :c");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`Komenda ${f} załadowana!`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on("ready", async() => { // po zalogowani
  console.log(`${bot.user.username} jest zalogowany!`);
  bot.user.set
});


bot.on("message", async message => { // czyta wiadomosci
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" "); //To co po spacji nie jest messageArray
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1); //po spacji


let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);


//przywitania
  if(
    !cmd.indexOf("cześć") ||
    !cmd.indexOf("elo") ||
    !cmd.indexOf("wita") )
    {
      let randHello = RANDOM(8);
      if (randHello == 0) return message.channel.send("Hej!");
      if (randHello == 1) return message.channel.send("Witaj!");
      if (randHello == 2) return message.channel.send("Miło cię tu widzieć ;v;");
      if (randHello == 3) return message.channel.send("Dzień dobry!");
      if (randHello == 4) return message.channel.send("Cieszę się, że tu jesteś ;v;");
      if (randHello == 5) return message.channel.send("Jak się masz?");
      if (randHello == 6) return message.channel.send("Jak tam u Ciebie?");
      if (randHello == 7) return message.channel.send("Hej, dawno Cię tutaj nie widziałam!");
    }

  if(
    !cmd.indexOf("hara") )
    {
      return message.channel.send("Słucham?");
    }
  
  if(
    !message.content.toLowerCase().replace(/ /g, "spacja").indexOf("kurw") ||
    !message.content.indexOf("huj") ||
    !message.content.indexOf("chuj") ||
    !message.content.indexOf("pierdol"))
  {
   let randCurse = RANDOM(4);
   if (randCurse == 0) return message.channel.send(`${message.content} Nie przeklinaj, proszę ;^;`);
   if (randCurse == 1) return message.channel.send("Uważaj na słowa!");
   if (randCurse == 2) return message.channel.send("Używaj milszych słow, komuś się może zrobić przykro! '^'");
   if (randCurse == 3) return message.channel.send("Proszę nie używaj brzydkich słów!");
  }



})

bot.login(config.token);

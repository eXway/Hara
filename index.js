const config = require("./config.json");
const key = process.env.token;
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
  bot.user.setActivity("/ho/pat", {type: "WATCHING"});
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
  if((
    message.content.toLowerCase().search("kurw") > -1 ||
    message.content.toLowerCase().search("huj") > -1 ||
    message.content.toLowerCase().search("chuj") > -1 ||
    message.content.toLowerCase().search("pizd") > -1 ||
    message.content.toLowerCase().search("kutas") > -1 ||
    message.content.toLowerCase().search("nudeski") > -1 ||       
    message.content.toLowerCase().search("jeba") > -1 ||
    message.content.toLowerCase().search("jebie") > -1 ||
    message.content.toLowerCase().search("jebię") > -1 ||
    message.content.toLowerCase().search("jebn") > -1 ||
    message.content.toLowerCase().search("pierdol") > -1) &&
    message.author.id != "215420153221873665")
  {
   let splitContent = messageArray;
   let filteredContent = [];
   for (let incres = 0; incres < splitContent.length; incres++) {
     if (
       splitContent[incres].toLowerCase().search("kurw") > -1 ||
       splitContent[incres].toLowerCase().search("huj") > -1 ||
       splitContent[incres].toLowerCase().search("chuj") > -1 ||
       splitContent[incres].toLowerCase().search("pizd") > -1 ||
       splitContent[incres].toLowerCase().search("kutas") > -1 ||
       splitContent[incres].toLowerCase().search("nudeski") > -1 ||
       splitContent[incres].toLowerCase().search("jeba") > -1 ||
       splitContent[incres].toLowerCase().search("jebie") > -1 ||
       splitContent[incres].toLowerCase().search("jebię") > -1 ||
       splitContent[incres].toLowerCase().search("jebn") > -1 ||
       splitContent[incres].toLowerCase().search("pierdol") > -1) {
       let splitContLeng = splitContent[incres].length;
       let saveSplitContent = splitContent[incres];
       splitContent[incres] = splitContent[incres].substr(0, 1);
       for (let incres_2 = 1; incres_2 < splitContLeng - 1; incres_2++) {
         curseRand = RANDOM(6);
         if (curseRand == 0) curseMark ='!';
         if (curseRand == 1) curseMark ='@';
         if (curseRand == 2) curseMark ='#';
         if (curseRand == 3) curseMark ='$';
         if (curseRand == 4) curseMark ='%';
         if (curseRand == 5) curseMark ='&';

         splitContent[incres] += curseMark;
       }
       splitContent[incres] += saveSplitContent.substr(-1, 1);
     }
    filteredContent.push(splitContent[incres]);
   }
   message.channel.send(message.author + " - **cenzura**:\n"+filteredContent.join(" "));
   message.delete().catch(O_o=>{});
  }
  
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
      if (randHello == 6) return message.channel.send("Jak tam u ciebie?");
      if (randHello == 7) return message.channel.send("Hej, dawno cię tutaj nie widziałam!");
    }

  if(
    message.content.toLowerCase().search("hara") > -1 )
    {
      let randHara = RANDOM(4);
      if (randHara == 0) return message.channel.send("Słucham?");
      if (randHara == 1) return message.channel.send("Tak?");
      if (randHara == 2) return message.channel.send("Ja? Hmmm?");
      if (randHara == 3) return message.channel.send(`Potrzebujesz czegoś, ${message.author}?`);
    }

    if(
    !cmd.indexOf("dobranoc") ||
    !cmd.indexOf("branocka") ||
    !cmd.indexOf("śpij") )
    {
      let randHello = RANDOM(5);
      if (randHello == 0) return message.channel.send("Śpij dobrze!");
      if (randHello == 1) return message.channel.send("Do zobaczenia jutro");
      if (randHello == 2) return message.channel.send("Karaluchy pod poduchy ;v;");
      if (randHello == 3) return message.channel.send("A może zosaniesz jeszcze na chwilkę? ;v;");
      if (randHello == 4) return message.channel.send("Miłych snów!");
      if (randHello == 4) return message.channel.send("Niech ci gwiazdeczki tańczą do snu <3");
    }

    if(
    message.content.toLowerCase().search("iksłej") > -1 ||
    message.content.toLowerCase().search("ekswej") > -1 ||
    message.content.toLowerCase().search("eksłej") > -1 ||
    message.content.toLowerCase().search("ixłej") > -1 ||
    message.content.toLowerCase().search("exłej") > -1 ||
    message.content.toLowerCase().search("eksway") > -1 ||
    message.content.toLowerCase().search("sexway") > -1 ||
    message.content.toLowerCase().search("sexłej") > -1 ||
    message.content.toLowerCase().search("seksłej") > -1 ||
    message.content.toLowerCase().search("sekslej") > -1 ||
    message.content.toLowerCase().search("sekysłej") > -1 ||
    message.content.toLowerCase().search("segzyłej") > -1 ||
    message.content.toLowerCase().search("sekswej") > -1)
    {
      return message.channel.send("*eXway");
    }

    //if (message.author.id == 215420153221873665 ) {message.delete().catch(O_o=>{});}


})

bot.login(key);

 console.clear();
 
 const Discord = require("discord.js");

const config = require("./Data/config.json");

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents: intents });

client.on("ready", () => console.log("Your maid is available Goshujin-sama!"));


"token": (process.env.TOKEN);
 

client.on("messageCreate", message => {
     console.log(message.content);

     if (message.content.includes("Bonne année")) message.reply("Akemashite omedetō Goshujin-sama ! C-Comptez sur moi pour l'année prochaine !");
     if (message.content.includes("bonne année")) message.reply("Akemashite omedetō Goshujin-sama ! C-Comptez sur moi pour l'année prochaine !");
     if (message.content.includes("Bonne annee")) message.reply("Akemashite omedetō Goshujin-sama ! C-Comptez sur moi pour l'année prochaine !");
     if (message.content.includes("bonne annee")) message.reply("Akemashite omedetō Goshujin-sama ! C-Comptez sur moi pour l'année prochaine !");
     if (message.content.includes("Happy New Year")) message.reply("I wish you an Akemashite omedetō, Goshujin-sama ! C-Comptez sur moi pour l'année prochaine !");
     if (message.content.includes("happy new year")) message.reply("I wish you an Akemashite omedetō, Goshujin-sama ! C-Comptez sur moi pour l'année prochaine !");
     



    if (message.content.includes("salut")) message.reply("O-Ohayo Goshujin-sama 👉  👈");
    if (message.content.includes("Salut")) message.reply("Okaerinasai, Goshujin-sama !");
    if (message.content.includes("slt")) message.reply("O-Ohayo Goshujin-sama, bien dormi ?");
    if (message.content.includes("Slt")) message.reply("O-Ohayo Goshujin-sama 👉  👈");
    if (message.content.includes("Bonjour")) message.reply("O-Ohayo Goshujin-sama, bien dormi ?");
    if (message.content.includes("bonjour")) message.reply("O-Ohayo Goshujin-sama 👉  👈");
    if (message.content.includes("bjr")) message.reply("Okaerinasai, Goshujin-sama ! votre dîner est prêt");
    if (message.content == "yo") message.reply("O-Ohayo Goshujin-sama 👉  👈");
    if (message.content == "Yo") message.reply("O-Ohayo Goshujin-sama 👉  👈");

    if (message.content.includes("Bonsoir")) message.reply("KonBanwa Goshujin-sama");
    if (message.content.includes("bonsoir")) message.reply("KonBanwa Goshujin-sama");

    if (message.content == "Ca va") message.reply("Heureuse de l'entendre, Goshujin-sama");
    if (message.content == "ca va") message.reply("Heureuse de l'entendre, Goshujin-sama");
    if (message.content == "ça va") message.reply("Heureuse de l'entendre, Goshujin-sama");

    if (message.content.includes("J'ai faim")) message.reply("V...vous voulez que je vous prépare quelque chose, Goshujin-sama ?");
    if (message.content.includes("Jai faim")) message.reply("V...vous voulez que je vous prépare quelque chose, Goshujin-sama ?");
    if (message.content.includes("j'ai faim")) message.reply("V...vous voulez que je vous prépare quelque chose, Goshujin-sama ?");
    if (message.content.includes("jai faim")) message.reply("V...vous voulez que je vous prépare quelque chose, Goshujin-sama ?");
    if (message.content.includes("J ai faim")) message.reply("V...vous voulez que je vous prépare quelque chose, Goshujin-sama ?");
    if (message.content.includes("j ai faim")) message.reply("V...vous voulez que je vous prépare quelque chose, Goshujin-sama ?");

    if (message.content.includes("Fatigue")) message.reply("Je peux vous masser les épaules, Goshujin-sama ?");
    if (message.content.includes("fatigue")) message.reply("Je peux vous masser les épaules, Goshujin-sama ?");
    if (message.content.includes("Fatigué")) message.reply("J...je suis toujours disponible pour vous faire un blowjob et vous remettre d'aplomb, Goshujin-sama");
    if (message.content.includes("fatigué")) message.reply("J...je suis toujours disponible pour vous faire un blowjob et vous remettre d'aplomb, Goshujin-sama");

    if (message.content.includes("Nils")) message.channel.send("N-nils sama ! arrêtez de courir nu dans votre chambre !");
    if (message.content == "nils") message.reply("N-nils sama ! arrêtez de courir nu dans votre chambre !");
    
    if (message.content == "War") message.channel.send("War-sama ! Désolée de vous avoir fait tomber les ciseaux sur la jambe ! C'était vraiment pas voulu !!");
    if (message.content == "war") message.channel.send("War-sama ! Désolée de vous avoir fait tomber les ciseaux sur la jambe ! C'était vraiment pas voulu !!");

    if (message.content == "Pierre") message.channel.send("Goshujin-sama change souvent de nom, alors ça restera Goshujin-sama");
    if (message.content == "pierre") message.channel.send("Goshujin-sama change souvent de nom, alors ça restera Goshujin-sama");

    if (message.content.includes("Les Singes")) message.reply("G-goshujin-sama, vous devez surement parler du plus grand film que l'humanité ait connue et ait pu apprécier au courant de son évolution, une réelle oeuvre cinématographique qui pourra plaire à tout le monde et qui remportera surement au moins 7 oscars et un dildo offert par une fan lors d'une séance de dédicaces en été, laissez moi prendre ma respiration, Goshujin-sama");
    if (message.content.includes("les singes")) message.reply("G-goshujin-sama, vous devez surement parler du plus grand film que l'humanité ait connue et ait pu apprécier au courant de son évolution, une réelle oeuvre cinématographique qui pourra plaire à tout le monde et qui remportera surement au moins 7 oscars et un dildo offert par une fan lors d'une séance de dédicaces en été, laissez moi prendre ma respiration, Goshujin-sama");
    if (message.content.includes("Les singes")) message.reply("G-goshujin-sama, vous devez surement parler du plus grand film que l'humanité ait connue et ait pu apprécier au courant de son évolution, une réelle oeuvre cinématographique qui pourra plaire à tout le monde et qui remportera surement au moins 7 oscars et un dildo offert par une fan lors d'une séance de dédicaces en été, laissez moi prendre ma respiration, Goshujin-sama");

    if (message.content.includes("UwU")) message.channel.send("V...vous tenez vraiment à ce que je le fasse, Goshujin-sama ?");
    if (message.content == "uwu") message.channel.send("uwu nigger");

    if (message.content == "Baka") message.reply("B...Baka Goshujin-sama");
    if (message.content == "baka") message.reply("B...Baka Goshujin-sama");

    if (message.content.includes("maid")) message.reply("H-Hai ! Maid desu !");
    if (message.content == "Maid") message.reply("H-Hai ! Maid desu !");

    if (message.content.includes("dessin")) message.channel.send("Hai ! Vous faites les meilleurs Dessins Goshujin-sama");
    if (message.content.includes("dessins")) message.channel.send("Hai ! Vous faites les meilleurs Dessins Goshujin-sama");
    if (message.content == "Dessin") message.channel.send("Hai ! Vous faites les meilleurs dessins Goshujin-sama");
    if (message.content == "Dessins") message.channel.send("Hai ! Vous faites les meilleurs dessins Goshujin-sama");

    if (message.content.includes("cum")) message.channel.send("Any coomers?");
    if (message.content.includes("Cum")) message.channel.send("Any coomers?");

    if (message.content.includes("fuck")) message.reply("G-Goshujin-sama, Here ? Now ?");
    if (message.content.includes("Fuck")) message.reply("G-Goshujin-sama, Here ? Now ?");

    if (message.content.includes("lol")) message.channel.send("Goshujin-sama... vous aviez dit que vous repreniez les douches...");

    if (message.content.includes("manger")) message.reply("Sumimasen Gochujin-sama ! le repas a prit un peu en retard !");
    if (message.content.includes("Manger")) message.reply("Sumimasen Gochujin-sama ! le repas a prit un peu de retard !");

    if (message.content.includes("ban")) message.reply("Onegai Goshujin-sama, réfléchissez-y vraiment avant de le faire cette fois-ci...");
    if (message.content == "") message.reply("Onegai Goshujin-sama, réfléchissez-y vraiment avant de le faire cette fois-ci...");

    if (message.content.includes("Mute")) message.channel.send("Goshujin-sama... Calmez vous s'il-vous-plait !");
    if (message.content.includes("mute")) message.channel.send("Goshujin-sama... Calmez vous s'il-vous-plait !");

    if (message.content.includes("Kick"))  message.channel.send("Vous avez énervé Goshujin-sama... Vous avez 3 secondes pour partir...");

    if (message.content == "Katherine") message.channel.send("Goshujin-sama n'allume pas souvent sa lumière, comme batman");
    if (message.content == "katherine") message.channel.send("Goshujin-sama n'allume pas souvent sa lumière, comme batman");

    if (message.content.includes("Hentai")) message.channel.send("Y-Yamete kudasai");

    if (message.content == "Kyrian") message.channel.send("S-Sumimasen, je ne suis pas mineure...");
    if (message.content == "kyrian") message.channel.send("S-Sumimasen, je ne suis pas mineure...");

    if (message.content == "Kyllian") message.channel.send("OH LE IEP LA");
    if (message.content == "kyllian") message.channel.send("OH LE IEP LA");

    if (message.content == "Isa") message.channel.send("wow that grill is pog dude");
    if (message.content == "isa") message.channel.send("wow that grill is pog dude");

    if (message.content == "koeurt") message.channel.send("Yep, c'est koeurt");
    if (message.content == "Koeurt") message.channel.send("Yep, c'est koeurt");

    if (message.content.includes("Au revoir"))  message.channel.send("Revenez vite, Goshujin-sama !");
    if (message.content.includes("au revoir"))  message.channel.send("Je vous attendrai ici, Goshujin-sama");




});

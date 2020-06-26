const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client({disableEveryone: true});
// status

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("tutorial bot :)", {type: "WATCHING"}); // it can be PLAYING, WATCHING, STREAMING, LISTENING
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === 'hi'){
        return message.channel.send("Hiya!")
    }

    if(cmd === 'nathan'){
        return message.reply("Is the best!") // ;)
    }
})

bot.login(config.token)
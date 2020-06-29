const Discord = require('discord.js');
const config = require('../config.json');
//ep4
module.exports.run = async (bot, message, args) => {

    let pingembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("🏓 Pong!")
    .addField("API Latency:", `\`${Math.round(bot.ws.ping)} ms\``)
    message.channel.send(pingembed)
}

module.exports.config = {
    name: "ping",
    description: "Shows the bot api latency",
    usage: "?ping",
    accessableby: "Mod",
    aliases: ["botping"]
}
const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let pingembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("🏓 Pong!")
    .addField("API Latency:", `\`${Math.round(bot.ws.ping)} ms\``)
    message.channel.send(pingembed)
}

module.exports.config = {
    name: "ping",
    description: "",
    usage: "?ping",
    accessableby: "Members",
    aliases: []
}

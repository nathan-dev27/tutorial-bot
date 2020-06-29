const Discord = require("discord.js")
const config = require("../config.json");
// ep2
module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply(":x: Error! You don't have enough permission!").then(m => m.delete(5000));
    }

    if (isNaN(args[0] || parseInt(args[0]) <= 0)) {
        return message.reply("This is not a number.").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`An error occured while trying to execute this command: ${err}`));

}

module.exports.config = {
    name: "clear",
    description: "Clears a specific amount of messages.",
    usage: "?clear",
    accessableby: "Members",
    aliases: ['clr', 'c', 'p', 'purge']
}
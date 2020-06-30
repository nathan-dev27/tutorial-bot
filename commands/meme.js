const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["meme", "dankmemes", "memes", "me_irl", "dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random)

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From subreddit /r.${random}`)
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);
}

module.exports.config = {
    name: "meme",
    description: "just for fun",
    usage: "?meme",
    accessableby: "Members",
    aliases: []
} 

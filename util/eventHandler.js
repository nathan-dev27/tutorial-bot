const reqEvent = (event) => require('../events/ready')

module.exports = bot => {
    bot.on("ready", function() {reqEvent("ready") (bot)});
}
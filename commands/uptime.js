const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let days = Math.floor(moist.uptime / 86400000);
    let hours = Math.floor(moist.uptime / 3600000) % 24;
    let minutes = Math.floor(moist.uptime / 60000) % 60;
    let seconds = Math.floor(moist.uptime / 1000) % 60;

     message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`);
  }
  module.exports.help = {
    name: "uptime"
}
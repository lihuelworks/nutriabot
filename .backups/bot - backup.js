"use strict";

/// CONFIG ZONE ------------------------

// require the discord.js module
const Discord = require("discord.js");

// Require config file
const { prefix, token } = require("./config.json");

// create a new Discord client
const client = new Discord.Client();

/// CODE ZONE ------------------------

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.once("ready", () => {
  console.log("Nutriabot está online!");
});

client.on("message", (message) => {
  // if message doesnt start with prefix or is sent by bot, exit early
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  // make var out of message, taking out prefix and spliting into array by spaces
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  //return 1st element in args array and lowercase it
  const command = args.shift().toLowerCase();

  //test command
  if (command === "args-info") {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    }

    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  } else if (command === "kick") {
    // grab the "first" mentioned user from the message
    // this will return a `User` object, just like `message.author`
    const taggedUser = message.mentions.users.first();
    if (!message.mentions.users.size) {
      return message.reply("you need to tag a user in order to kick them!");
    }
    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
  } else if (command === "avatar") {
    if (!message.mentions.users.size) {
      return message.channel.send(
        `Your avatar: <${message.author.displayAvatarURL({
          format: "png",
          dynamic: true,
        })}>`
      );
    }
    const avatarList = message.mentions.users.map((user) => {
      return `${user.username}'s avatar: <${user.displayAvatarURL({
        format: "png",
        dynamic: true,
      })}>`;
    });
    // send the entire array of strings as a message
    // by default, discord.js will `.join()` the array with `\n`
    message.channel.send(avatarList);
  } else if (command === "prune") {
    const amount = parseInt(args[0])+ 1;
    console.log(`Argumento de prune --> ${args[0]}`);
    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount <= 1 || amount > 100) {
      return message.reply("you need to input a number between 2 and 100.");
    } else {
      message.channel.bulkDelete(amount, true).catch((err) => {
        console.error(err);
        message.channel.send(
          "there was an error trying to prune messages in this channel!"
        );
      });
    }

    // ...
  }
});

// COMMAND: --nutrias _ da fecha de inicio de server y num de usuarios

/* client.on('message', message => {
  console.log(message.content);
  if (message.content === '!ping') {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.');
  } else if (message.content === `${prefix}nutrias`) {
    message.channel.send(`
    En ${message.guild.name} somos un total de...
    ${message.guild.memberCount} usuarios!
    🌊🦦🌊...`);
  }
}); */

// COMMAND: how to embed example

/* client.on('message', message => {
  //  console.log(message.content);
  // If the message is "how to embed"
  if (message.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
}); */

/// NO CODE FROM HERE
/// LOGIN ZONE ------------------------

// Log our bot in using the token from https://discord.com/developers/applications
client.login(token);

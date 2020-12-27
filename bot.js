'use strict';

/// CONFIG ZONE ------------------------

// require the discord.js module
const Discord = require('discord.js');

// Require config file
const config = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

/// CODE ZONE ------------------------

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.once('ready', () => {
  console.log('Nutriabot está online!');
});


client.on('message', message => {
  console.log(message.content);
  if (message.content === '!ping') {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.');
  }
});


client.on('message', message => {
  console.log(message.content);
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
});

/// NO CODE FROM HERE
/// LOGIN ZONE ------------------------

// Log our bot in using the token from https://discord.com/developers/applications
client.login(config.token);
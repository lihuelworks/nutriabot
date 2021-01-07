'use strict';

/// CONFIG ZONE ------------------------

// require Node's native file system module
const fs = require('fs');

// require the discord.js module
const Discord = require('discord.js');

// Require config file
const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// create a new Discord collection class from Discord JS. Needed to use commands
client.commands = new Discord.Collection();
// retrieve all filenames on ./commands, and filter those whcih end in .js into an array
const commandFiles = fs
	.readdirSync('./commands')
	.filter((file) => file.endsWith('.js'));
// loop array to import commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	console.log(command);
	// set a new item in the Collection created in var commands
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

/// CODE ZONE ------------------------

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.once('ready', () => {
	console.log('Nutriabot está online!');
});

client.on('message', (message) => {
	// if message doesnt start with prefix or its is sent by bot, exit early
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	// make var out of message, taking out prefix and spliting into array by spaces
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	// commandName: var with return 1st element in args var array and lowercase it
	const commandName = args.shift().toLowerCase();
	// command: var with object of command, gotten from client.commands (which is a Collection on my commands)
	const command = client.commands.get(commandName);


	// check if arguments were provided
	if (command.args && !args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

	// COMMANDS HANDLER
	try {
		client.commands.get(commandName).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

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

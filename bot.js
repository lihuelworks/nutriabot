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

// cooldowns: Collection var that will contain cooldowns of commands
const cooldowns = new Discord.Collection();

// create property on client Class. It's a Collection type, will cointain all commands importaed from ./commands folder
client.commands = new Discord.Collection();

// command ipmort: retrieve all filenames on ./commands, and filter those whcih end in .js into an array
const commandFiles = fs
	.readdirSync('./commands')
	.filter((file) => file.endsWith('.js'));
// loop array to import commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// console.log(command);
	// set a new item in the Collection created in var commands
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


/// CODE ZONE ------------------------

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */

// READY event
client.once('ready', () => {
	console.log('Nutriabot está online!');
});

// COMMMAND checker and handler
client.on('message', (message) => {
	// CHECKS and fixes
	// CHECK: if message doesnt start with prefix or its is sent by bot, exit early
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// make var out of message, taking out prefix and spliting into array by spaces
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	// commandName: var with return 1st element in args var array and lowercase it
	const commandName = args.shift().toLowerCase();

	// CHECK: does command exist inside of commands Collection?
	if (!client.commands.has(commandName)) return;
	// command: var with object of command, gotten from client.commands (which is a Collection on my commands).
	const command = client.commands.get(commandName);
	// debug check: whats inside command obj?
	// console.log(command);
	// CHECK: is the command being called in the DM's? Does it work there (is property guildOnly set to "true")?
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	// CHECK: were arguments provided?
	// (Only checked if args property in command file is set to 'true')
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}

	// CHECK: does command have cooldowns? If so, enforce them
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	/* console.log(`cooldowns inside:
	${[...cooldowns.entries()]}`); */

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	/* console.log(`cooldowns AFTER:
	${[...cooldowns.entries()]}`);
 */
	timestamps.set(message.author.id, now);
	/* console.log(`timeout inside:
	${[...timestamps.entries()]}`); */

	/* console.log(`cooldowns AFTER TWO:
	${[...cooldowns.entries()]}`);
 */
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

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

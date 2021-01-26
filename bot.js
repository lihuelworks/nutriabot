'use strict';

const fs = require('fs');

const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync('./commands')
	.filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Nutriabot está online!');
});

client.on('message', (message) => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);

	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('No puedo ejecutar éste comando dentro de DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('No tenes permisos de ejecutar éste comando!');
		}
	}

	if (command.args && !args.length) {
		// console.log('args check hit!');
		let reply = `No ingresaste ningún argumento, ${message.author}!`;
		if (command.usage) {
			reply += `\nEl uso esperado del comando es: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}

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
			return message.reply(`por favor espere ${timeLeft.toFixed(1)} segundos más antes de reusar el comando \`${command.name}\`.`);
		}
	}

	/* console.log(`cooldowns AFTER:
	${[...cooldowns.entries()]}`);
 */
	timestamps.set(message.author.id, now);
	/* console.log(`timeout inside:
	${[...timestamps.entries()]}`); */

	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(`-----------------
		The error was:
		${error}`);
		message.reply('hubo un error al tratar de ejecutar el comando, por favor consulte a un administrador al respecto');
	}
});

client.login(token);

const { prefix } = require('../config.json');

module.exports = {
	name: 'ayuda',
	description: 'Lista todos los comandos, o info particular sobre un comando específo',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;
		if (!args.length) {
			data.push('Acá hay una lista de todos los comandos:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nPodes enviar \`${prefix}ayuda [nombre del comando]\` para obtener ayuda de un comando específico!`);

			return message.author.send(data, { split: true })
				.then(() => {
					// this proves that the message being evaulated is the on initially sent, and not the one sent above in the return (in message.author.send(etc))
					// console.log('---Promise succesful!');
					// console.log(`message channels is: ${message.channel}, message types is ${message.channel.type}, and message object is: ${message}`);
					if (message.channel.type === 'dm') return;
					message.reply('Te envié un DM con todos mis comandos!');
				})
				.catch(error => {
					console.error(`No se pudo enviar el DM a ${message.author.tag}.\n`, error);
					message.reply('No se pudo enviar el DM. ¿Tenes los DM deshabilitados? Prueba investigarlo bajo el siguiente link (Ver sección "AUDIENCIA SELECTIVA: EDICIÓN “MENSAJE DIRECTO”"):');
					message.channel.send('https://support.discord.com/hc/es/articles/217916488-Ajustes-de-bloqueo-y-privacidad');
				});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};
module.exports = {
	name: 'nutrias',
	description: 'da fecha de inicio de server y num de usuarios (o "nutrias")',
	execute(message, args) {
		message.channel.send(`
    En ${message.guild.name} somos un total de...
    ${message.guild.memberCount} usuarios!
    🌊🦦🌊...`);
	},
};
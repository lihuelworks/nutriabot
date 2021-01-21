module.exports = {
	name: 'canal',
	description: 'Da detalles del canal de Youtube',
	execute(message) {
		message.channel.send('El canal se creó con la finalidad de formar una comunidad e informar contenido de calidad. Dado que es personal, me gusta mostrar mi vida como estudiante universitario y mis rutinas.');
		message.channel.send('https://www.youtube.com/c/TecnoBearARG');
		return;
	},
};


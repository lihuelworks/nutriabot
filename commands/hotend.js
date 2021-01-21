module.exports = {
	name: 'hotend',
	description: 'Definición de hotend en impresoras 3D',
	execute(message) {
		const hotendEmbed = {
			'embed': {
				'title': '¿Que es el hotend?',
				'color': '#FF0000',
				'thumbnail': {
					'url': 'https://imgur.com/D9qTYOv.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Es la parte final del extrusor, la cual va a fundir el filamento y lo va a depositar sobre la superficie de impresión. Existen distintos tipos, el mejor es el E3D original pero dado a que sale muy caro, en Argentina tenemos otras alternativas. (Mk8, Argento, Simil)',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Mk8, Argento, Simil.',
					},
				],
			},
		};

		message.channel.send(hotendEmbed);
		return;
	},
};


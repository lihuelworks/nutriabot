module.exports = {
	name: 'cambio',
	description: 'Pequeña guía de como funciona el cambio de filamento en impresoras 3D',
	execute(message) {
		const cambioEmbed = {
			'embed': {
				'title': 'Como funciona el cambio de filamento?',
				'color': '#FF0000',
				'thumbnail': {
					'url': 'https://imgur.com/AJtLfyO.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀El cambio de filamento puede variar dado al hotend de tu impresora.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Las máquinas que tienen 2 extrusores y 2 hotend hacen que requieran más electrónica, la placa de 32 bits es necesaria.',
					},

					{
						'name': '⠀',
						'value': '👉🏾⠀⠀En la actualidad hay pocas impresoras que valgan la pena y para eso se usa un script de los slicers',
					},
					{
						'name': '⠀',
						'value': '___',
					},

					{
						'name': '⠀',
						'value': '_👇🏾 Podes ver más del tema en mi canal 👇🏾_',
					},
				],
			},
		};

		message.channel.send(cambioEmbed);
		message.channel.send(
			'https://www.youtube.com/watch?v=CfNOS0jKZIE');
		return;
	},
};


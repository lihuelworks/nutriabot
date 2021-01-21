module.exports = {
	name: 'nozzle',
	description: 'Pequeña guía de que son los extrusores en impresoras 3D',
	execute(message) {
		const nozzleEmbed = {
			'embed': {
				'title': '¿Que es el nozzle? ¿Como lo puedo cambiar?',
				'color': '#202225 ',
				'thumbnail': {
					'url': 'https://imgur.com/T5mImgw.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀El nozzle es la parte a la que pasa el filamento de plástico para ser depositado en la cama de impresión, formando su parte.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Para una parte tan pequeña, la boquilla tiene un gran impacto en la calidad de su impresión final, el tiempo necesario para imprimir el modelo, y la frecuencia con la que los filamentos se obstruyen, causando errores.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Existen distintos tipos como lo son: Boquilla de latón , Acero inoxidable , Acero templado, Con punta de rubí (por Olsson Ruby).',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀El nozzle puede variar también su diámetro, esto hace que este mas material o menos, existen varias medidas (0.1, 0.2 ,0.3 , 0.4 , 0.6 , 0.8).',
					},
					{
						'name': '⠀',
						'value': '___',
					},

					{
						'name': '⠀',
						'value': '_👇🏾 En mi canal podes ver como cambiarlo 👇🏾 _',
					},
				],
			},
		};

		message.channel.send(nozzleEmbed);
		message.channel.send(
			'https://www.youtube.com/watch?v=BrHlt1Z2o38');
		return;
	},
};


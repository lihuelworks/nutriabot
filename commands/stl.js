module.exports = {
	name: 'stl',
	description: 'Da info sobre los STLs y donde están  que son los mates 3D guía de que son los extrusores en impresoras 3D',
	execute(message) {
		const stlEmbed = {
			'embed': {
				'title': '¿Que son los STL? ¿Como se pueden modificar?',
				'color': '#202225',
				'thumbnail': {
					'url': 'https://files.cults3d.com/uploaders/14379271/illustration-file/5bed525c-26c9-4f4c-bb42-85bd8914371c/luke2_large.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Los STL se suelen pedir muy seguido, tenemos un canal en el Discord dedicado a eso y en el link de paginas estan muchos grupos de Telegram.',
					},
					{
						'name': '⠀',
						'value': '___',
					},

					{
						'name': '⠀',
						'value': '*_👇🏾 Podes ver más del tema en mi canal 👇🏾_*',
					},
				],
			},
		};

		message.channel.send(stlEmbed);
		message.channel.send('https://www.youtube.com/watch?v=gihEFMHFfgQ&t=258s');
		return;
	},
};


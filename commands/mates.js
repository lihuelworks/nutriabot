module.exports = {
	name: 'mates',
	description: 'Explica que son los mates 3D guía de que son los extrusores en impresoras 3D',
	execute(message) {
		const matesEmbeded = {
			'embed': {
				'title': '¿Que son los mates 3D? ¿Como se hacen?',
				'color': '#202225',
				'thumbnail': {
					'url': 'https://files.cults3d.com/uploaders/14379271/illustration-file/5bed525c-26c9-4f4c-bb42-85bd8914371c/luke2_large.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Los mates en 3D se están viendo mucho, es una de las áreas de impresión 3D que más demanda tiene. ',
					},
					{
						'name': '⠀',
						'value': '___',
					},

					{
						'name': '⠀',
						'value': '*_👇🏾 En el canal se hizo un video para que él que quiera, pueda aprender a modificarlos 👇🏾_*',
					},
				],
			},
		};

		message.channel.send(matesEmbeded);
		message.channel.send('https://www.youtube.com/watch?v=gihEFMHFfgQ');
		return;
	},
};


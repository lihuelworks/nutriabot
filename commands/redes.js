module.exports = {
	name: 'redes',
	description: 'Comparte las redes de Yoel',
	execute(message) {
		const redesEmbed = {
			'embed': {
				'title': '¿Cuales son las marcas más conocidas de impresora?',
				'color': '#202225 ',
				'thumbnail': {
					'url': 'https://instagram.feze12-1.fna.fbcdn.net/v/t51.2885-15/e35/138874325_1649356245250831_1103876154708590267_n.jpg?_nc_ht=instagram.feze12-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=XkIeazDUbTUAX_hjMiW&tp=1&oh=a54080480c71e2edf7244c5644f9d9f7&oe=6032AD71	',
				},
				'fields': [
					{
						'name': '⠀👉🏾⠀⠀Yoel tiene varias redes sociales donde interactúa y es activo:',
						'value': '⠀⠀⠀⠀⠀⠀•⠀⠀[Instagram @yoelalmiron](https://www.instagram.com/yoelalmiron/)\n⠀⠀⠀⠀⠀⠀•⠀⠀[Facebook Yoel Almiron](https://www.facebook.com/yoel.almiron/)\n⠀⠀⠀⠀⠀⠀•⠀⠀[Twitch](https://www.twitch.tv/lanutria_furiosa)\n⠀⠀⠀⠀⠀⠀•⠀⠀[Twitter Yoel Almiron](https://twitter.com/YoelAlmiron)\n⠀⠀⠀⠀⠀⠀•⠀⠀[Youtube](https://www.youtube.com/c/TecnoBearARG	)\n⠀⠀⠀⠀⠀⠀•⠀⠀[Github](https://github.com/yoelalmiron1997)',
					},
					{
						'name': '👇🏾⠀Lo más importante...⠀👇🏾',
						'value': '⠀⠀⠀⠀⠀⠀•⠀⠀**_[Thingiverse](https://www.thingiverse.com/lanutriafuriosa/designs)_**',
					},
				],
			},
		};

		message.channel.send(redesEmbed);
		return;
	},
};


module.exports = {
	name: 'impresoras',
	description: 'Recomienda impresoras 3D',
	execute(message) {
		const impresorasEmbed = {
			'embed': {
				'title': '¿Cuales son las marcas más conocidas de impresora?',
				'color': '#202225 ',
				'thumbnail': {
					'url': 'https://teachers.wrdsb.ca/mrstocco/files/2020/12/465ef574-404d-4592-80a5-f8127f650739.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Existen infinitas impresoras 3D, la realidad es que en Argentina entran muchas menos pero voy a mencionar las marcas de las más reconocidas y con mayor comunidad.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Las marcas más conocidas en Argentina son:\n⠀⠀⠀⠀⠀⠀•⠀⠀Creality Ender 3 (3 pro y V2) \n⠀⠀⠀⠀⠀⠀•⠀⠀Creality Cr10\n⠀⠀⠀⠀⠀⠀•⠀⠀Flsun Delta\n⠀⠀⠀⠀⠀⠀•⠀⠀Original Prusa i3 MK3S+\n⠀⠀⠀⠀⠀⠀•⠀⠀Hellbot Magna 1\n⠀⠀⠀⠀⠀⠀•⠀⠀Trimaker Nebula\n⠀⠀⠀⠀⠀⠀•⠀⠀Kuttercraft PK3',
					},
				],
			},
		};

		message.channel.send(impresorasEmbed);
		return;
	},
};


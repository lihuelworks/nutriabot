module.exports = {
	name: 'libros',
	description: 'Recomienda libros relacionados a impresión 3D',
	execute(message) {
		const librosEmbed = {
			'embed': {
				'title': '¿Que libros recomiendo?',
				'color': '#202225',
				'thumbnail': {
					'url': 'https://i.pinimg.com/originals/2c/5f/82/2c5f82fa2293444282b7948471eb63b6.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Los libros nos informan y nos ayudan, hoy con el internet son dejados de lado pero les dejo el nombre de algunos que me sirvieron para mi formación y son los que utilizo para informarme.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Las marcas más conocidas en Argentina son:\n⠀⠀⠀⠀⠀⠀•⠀⠀Impresión 3D 1ra y 2da edición de Sergio Gomez Gonzalez\n⠀⠀⠀⠀⠀⠀•⠀⠀[Prusa 3D by Josef Prusa](https://www.prusa3d.com/ebook-basics-of-3d-printing-with-josef-prusa/)\n⠀⠀⠀⠀⠀⠀•⠀⠀La impresión 3D by Mathilde Berchon',
					},
				],
			},
		};

		message.channel.send(librosEmbed);
		return;
	},
};


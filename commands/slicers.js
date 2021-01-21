module.exports = {
	name: 'slicers',
	description: 'Explica que son los Slicers 3D',
	execute(message) {
		const slicersEmbed = {
			'embed': {
				'title': '¿Que son los slicers 3D?',
				'color': '#202225 ',
				'thumbnail': {
					'url': 'https://imgur.com/1o7h0Up.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Un slicer3D es un programa de software de impresora 3D en el que puede importar modelos, por ejemplo, en _.STL._ _GCODE_ u _.OBJ_.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Estos forman el "camino" que la impresora va a usar para construir el objecto:  bordes, alturas y toda la información sobre su impresión.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Existen muchos, les dejo varios que son conocidos:',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Las marcas más conocidas en Argentina son:\n⠀⠀⠀⠀⠀⠀•⠀⠀Cura\n⠀⠀⠀⠀⠀⠀•⠀⠀Simplify3D($)\n⠀⠀⠀⠀⠀⠀•⠀⠀Slic3r\n⠀⠀⠀⠀⠀⠀•⠀⠀IdeaMaker\n⠀⠀⠀⠀⠀⠀•⠀⠀Pathio\n⠀⠀⠀⠀⠀⠀•⠀⠀PrusaSlicer\n⠀⠀⠀⠀⠀⠀•⠀⠀Repetier\n⠀⠀⠀⠀⠀⠀•⠀⠀Octoprint\n⠀⠀⠀⠀⠀⠀•⠀⠀SelfCAD\n⠀⠀⠀⠀⠀⠀•⠀⠀ _etc..._',
					},
				],
			},
		};

		message.channel.send(slicersEmbed);
		return;
	},
};


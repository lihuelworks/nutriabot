module.exports = {
	name: 'filamentos',
	description: 'Pequeña guía sobre filamentos en impresoras 3D',
	execute(message) {
		const filamentosEmbed = {
			'embed': {
				'title': '¿Que tipo de filamentos existen? ¿Que marcas existen en Argentina?',
				'color': '#202225 ',
				'thumbnail': {
					'url': 'https://i.pinimg.com/originals/cb/7b/29/cb7b29cb3cc658e59297d647b2b36d82.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Existen muchos filamentos en impresión 3D, se suelen usar unos pocos dado a la necesidad de fabricación que uno necesita.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀_PLA , ABS , PETG , FLEX , NYLON , PC , PLA + , PLA NT, PC, Madera , **etc...**_',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Cada material tiene sus propias propiedades de fusión y sus ventajas como desventajas.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Las marcas más conocidas en Argentina son:\n⠀⠀⠀⠀⠀⠀•⠀⠀GST\n⠀⠀⠀⠀⠀⠀•⠀⠀[Hellbot](https://hellbot.xyz/filamento-3d-hellbot/)\n⠀⠀⠀⠀⠀⠀•⠀⠀[Printalot](https://www.printalot.com.ar/)\n⠀⠀⠀⠀⠀⠀•⠀⠀[Grilon](https://listado.mercadolibre.com.ar/nth-grilon)\n⠀⠀⠀⠀⠀⠀•⠀⠀[Plast.ar](https://www.plastar.com.ar/)\n⠀⠀⠀⠀⠀⠀•⠀⠀[3n3](http://grupo3n3.com.ar/)',
					},
					{
						'name': '⠀',
						'value': '___',
					},
				],
			},
		};

		message.channel.send(filamentosEmbed);
		return;
	},
};


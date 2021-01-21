module.exports = {
	name: 'extrusor',
	description: 'Pequeña guía de que son los extrusores en impresoras 3D',
	execute(message) {
		const extrusorEmbed = {
			'embed': {
				'title': '¿Que es el extrusor? ¿Cual recomiendo yo?',
				'color': '#202225 ',
				'thumbnail': {
					'url': 'https://cdn11.bigcommerce.com/s-mm9wpa/images/stencil/original/products/1629/6949/bondtech-extruder-kit-bmg-standard-1.75_01-3d-printer-1000x1000__95738.1609383766.jpg?c=2',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀El extrusor es una pieza muy importante, es el que genera el movimiento del filamento y un flujo correcto es imprescindible.',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Existen muchos extrusores diferentes pero los más conocidos son los Bondtech, BMG y MKS.',
					},

					{
						'name': '⠀',
						'value': '👉🏾⠀⠀Los de doble tracción se pueden ver que los usa Creality y son los más recomendables, en ML lo pueden encontrar baratos.',
					},
					{
						'name': '⠀',
						'value': '___',
					},

					{
						'name': '⠀',
						'value': '*_👇🏾 Guía para elegir el extrusor de tu impresora 3D - Bitfab 👇🏾 _*',
					},
				],
			},
		};

		message.channel.send(extrusorEmbed);
		message.channel.send('https://bitfab.io/es/blog/extrusor-impresora-3d/');
		return;
	},
};


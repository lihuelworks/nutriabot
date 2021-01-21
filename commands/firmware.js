module.exports = {
	name: 'firmware',
	description: 'Pequeña guía sobre firmware en impresoras 3D',
	execute(message) {
		const firmwareEmbed = {
			'embed': {
				'title': '¿Que tipo de filamentos existen? ¿Que marcas existen en Argentina?',
				'color': '#03A062',
				'thumbnail': {
					'url': 'https://i.stack.imgur.com/oUQlR.gif',
				},
				'fields': [
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀En las impresoras tenemos un firmware, puede ser a veces que sea open source o privados. Existen varios: ',
					},
					{
						'name': '⠀',
						'value': '👉🏾⠀⠀_Redeem, MK4duo, Sailfish, Prusa Firmware, ImpPro3D , **etc...**_',
					},
					{
						'name': '⠀',
						'value': '*_👇🏾 El más conocido es el Marlin, la pagina esta se la dejo aca: 👇🏾 _*',
					},
				],
			},
		};

		message.channel.send(firmwareEmbed);
		message.channel.send('https://marlinfw.org/meta/gcode/');
		return;
	},
};


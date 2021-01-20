module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		const member = message.mentions.members.first() || message.member ;
		const avatarEmbed = {
			'embed': {
				'title': 'Esta es la imagen de perfil de AUTOR',
				'color': 663399,
				'image': {
					'url': 'https://cdn.discordapp.com/embed/avatars/0.png',
				},
			},
		};

		if (!message.mentions.users.size) {
			const url = message.author.displayAvatarURL({ dynamic: true, size: 512 });

			avatarEmbed.image = { url };
			avatarEmbed.title = `Esta es tu imagen ${message.author.username} !`;
			message.channel.send('No mencionaste a ningun usuario, así que te pasamos tu propio avatar!');
			message.channel.send({ embed: avatarEmbed });
			return;
		}

		const targetMember = message.mentions.members.first();
		const urlMember = member.user.avatarURL;
		avatarEmbed.image = { urlMember };
		avatarEmbed.title = `Esta es la imagen de ${targetMember.user.username}!`;
		message.channel.send({ embed: avatarEmbed });
		return;
	},
};


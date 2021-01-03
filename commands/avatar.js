module.exports = {
	name: 'avatar',
	description: 'Gives avatar URL of all users mentioned. If none mentioned, gives URL of sender.',
	execute(message, args) {
		if (!message.mentions.users.size) {
            return message.channel.send(
              `Your avatar: <${message.author.displayAvatarURL({
                format: "png",
                dynamic: true,
              })}>`
            );
          }
	},
};
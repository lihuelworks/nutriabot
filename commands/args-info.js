module.exports = {
	name: 'avatar',
	description: 'Gives avatar URL of all users mentioned. If none mentioned, gives URL of sender.',
	execute(message, args) {
		if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    }

    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	},
};
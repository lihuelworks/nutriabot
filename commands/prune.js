module.exports = {
	name: 'prune',
	description: 'Bulk deletes n number of messages per number in argument',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;
		console.log(`Argumento de prune --> ${args[0]}`);
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 2 and 100.');
		}
		else {
			message.channel.bulkDelete(amount, true).catch((err) => {
				console.error(err);
				message.channel.send(
					'there was an error trying to prune messages in this channel!',
				);
			});
		}
	},
};

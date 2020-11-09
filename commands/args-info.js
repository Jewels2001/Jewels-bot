module.exports = {
	name: 'args-info',
	description: 'Information about arguments provided.',
	args: true,
	execute(message, args) {
		/*if(!args.length){
      return message.channel.send(`You didn't provide any argumemts, ${message.author}!`);
    }
    else if(args[0] === 'foo'){
      return message.channel.send('bar');
    }*/
		if(args[0] === 'foo'){
			return message.channel.send('bar');
		}

    //message.channel.send(`First argument: ${args[0]}`);
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};

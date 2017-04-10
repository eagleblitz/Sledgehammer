const exec = require('child_process').exec

module.exports = {
	Metadata: {
		Name: "Exec",
		Description: "Executes a console command."
	},

	Execute: (Args, message) => {
		if (message.author.id === "141610251299454976" || message.author.id == "133659993768591360") {
			try {
				let start = new Date().getTime();
				let msg = "";
				let code = Args.slice(0, Args.length).join(' ');
				msg += "```js\n${stdout}```";

				exec(code, function (error, stdout, stderr) {
					if (stderr) return message.channel.sendCode('js', stderr)
					if (error) return message.channel.sendCode('js', error)
					let end = new Date().getTime();
					let time = end - start;
					message.channel.sendMessage("Time taken: " + (time / 1000) + " seconds\n" + "```js\n"+ stdout + "```");
					if (error !== null) {
						console.log('exec error: ' + error);
					}
				});
			} catch (e) {
				message.channel.sendMessage("```js\n" + e + "```");
			}
		}
	},
	Description: "Executes a console command.",
	Cooldown: 10,
	Usage: "",
	Unlisted: true
};

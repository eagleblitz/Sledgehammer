var emotes = [
	":hourglass:",
	"⏰", // Alarm Clock - http://emojipedia.org/alarm-clock/
	"📞", // Telephone Receiver - http://emojipedia.org/telephone-receiver/
	"📡", // Satellite Antenna - http://emojipedia.org/satellite-antenna/
	"📱", // Mobile Phone - http://emojipedia.org/mobile-phone/
];

module.exports = {
	Metadata: {
		Name: "Ping",
		Description: "Pong!"
	},

	Execute: (Args, message) => {
		let n = Date.now();
		let id = message.author.id;
		let emote = emotes[ Math.floor(Math.random() * emotes.length) ]; // Get a random emote
		message.reply(`${emote}`).then((m) => { // :${emote}: - Emote name
			let time = (m.createdTimestamp-n)/1000; // Convert from milliseconds to seconds.
			m.edit(`<@${message.author.id}> ${emote} ${time} seconds.`); // Edit message to show time
		});
	},
	Description: "Sends you information about the response time.",
	Cooldown: 5,
	Usage: ""
};

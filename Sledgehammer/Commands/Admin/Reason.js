module.exports = {
	Metadata: {
		Name: "Reason",
	},

	Execute: (Args, message) => {
		Sledgehamer.rdb.r.table('Logs').get({author: message.author.id, _id: Args[0]}).run(Sledgehamer.rdb.conn, (err, cursor) => {
          
        })
	},
	Description: "Edits a log. :|",
	Cooldown: 10,
	Usage: "<id> <reason>"
};
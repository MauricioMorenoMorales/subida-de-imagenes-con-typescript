import { connect } from 'mongoose'

export const startConnection = async () =>
	await connect(
		`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@nodejsplatzi.cg57m.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true },
	)
		.then(() => console.log(`>>>Database connected`))
		.catch(err => console.log(`DATABASE ERROR: ${err}`))

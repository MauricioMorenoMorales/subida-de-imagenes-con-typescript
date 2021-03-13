import app from './app'
import { startConnection } from './database'
;(async () => {
	app.listen(app.get('port'), () =>
		console.log(`>>>App running on port ${app.get('port')}`),
	)
	startConnection()
})()

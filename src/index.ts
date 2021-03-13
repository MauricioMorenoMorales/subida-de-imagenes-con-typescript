import app from './app'

;(async () =>
	app.listen(app.get('port'), () =>
		console.log(`App running on port ${app.get('port')}`),
	))()

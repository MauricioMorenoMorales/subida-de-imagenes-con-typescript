require('dotenv').config()
import express from 'express'
import morgan from 'morgan'

const app = express()

app.set('port', process.env.PORT || 5555)

//Middlewares
app.use(morgan('dev'))

export default app

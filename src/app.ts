require('dotenv').config()
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

import indexRoutes from './routes/index.routes'

const app = express()

app.set('port', process.env.PORT || 5555)

//Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//Routes

app.use('/api', indexRoutes)

app.use('/uploads', express.static(path.resolve('uploads')))

export default app

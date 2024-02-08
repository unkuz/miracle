import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import { connectMongoDB } from './db/mongo'
import { router } from './routes'

export const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(compression())

connectMongoDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

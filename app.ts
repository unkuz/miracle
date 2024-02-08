import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import { connectMongoDB } from './db/mongo'

export const app = express()

app.use(morgan('combined'))
app.use(helmet())
app.use(cors())
app.use(compression())

connectMongoDB()

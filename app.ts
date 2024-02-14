import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { connectMongoDB } from './db/mongo'
import { handleErr, notFound } from './core/errorCommon'
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

app.use(notFound)
app.use(handleErr)

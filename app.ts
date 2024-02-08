import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'

export const app = express()

app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())
app.use(compression())

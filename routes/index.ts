import { Router } from 'express'
import { accessRouter } from './access'
import { checkAPIKey } from '../middlewares/apiKey'

export const router = Router()

router.use(checkAPIKey)

router.use('/api/v1/', accessRouter)

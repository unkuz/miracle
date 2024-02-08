import { Router } from 'express'
import { accessRouter } from './access'

export const router = Router()

router.use('/api/v1/', accessRouter)

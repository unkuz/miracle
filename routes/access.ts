import { handleSyncError } from '../core/errorResponse'
import { AccessController } from '../controllers/access'
import { Router } from 'express'

export const accessRouter = Router()

accessRouter.post('/shop/signup', handleSyncError(AccessController.signUp))

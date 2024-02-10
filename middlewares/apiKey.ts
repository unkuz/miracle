import { NextFunction, Request, Response } from 'express'
import { APIKeyService } from '../services/apiKey'

const HEADER_API_KEY = 'x-api-key'
export const checkAPIKey = async (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers[HEADER_API_KEY]?.toString()
  if (!apiKey) {
    return res.status(403).json({
      message: 'Forbidden',
    })
  }

  try {
    const objApiKey = APIKeyService.checkExist(apiKey)
    if (!objApiKey) {
      return res.status(403).json({
        message: 'Forbidden',
      })
    }

    ;(req as any)['objApiKey'] = objApiKey

    return next()
  } catch (error) {
    console.error('objApiKey', error)
  }
}

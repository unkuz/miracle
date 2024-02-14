import { AccessService } from '../services/access'
import { Request, Response, NextFunction } from 'express'

export class AccessController {
  static async signUp(req: Request, res: Response, next: NextFunction) {
    return res.status(201).json(await AccessService.signUp(req.body))
  }
}

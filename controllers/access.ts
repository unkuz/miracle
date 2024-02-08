import { AccessService } from '../services/access'
import { Request, Response, NextFunction } from 'express'

export class AccessController {
  static async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const shopCreate = await AccessService.signUp(req.body)

      return res.status(201).json(shopCreate)
    } catch (e) {}
  }
}

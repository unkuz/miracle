import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'

class ErrorResponse extends Error {
  public status = StatusCodes.INTERNAL_SERVER_ERROR

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

export class ConflictRequestError extends ErrorResponse {
  constructor(status: number = StatusCodes.CONFLICT, message: string = ReasonPhrases.CONFLICT) {
    super(status, message)
  }
}

export class BadRequestError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.BAD_REQUEST,
    status: number = StatusCodes.BAD_REQUEST,
  ) {
    super(status, message)
  }
}

export const handleSyncError =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }

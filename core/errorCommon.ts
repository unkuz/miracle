import { NextFunction, Request, Response } from 'express'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { pick } from 'lodash'

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
  const err = {
    ...new Error(ReasonPhrases.NOT_FOUND),
    status: StatusCodes.NOT_FOUND,
  }
  next(err)
}

export const handleErr = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const defaultRes = {
    type: 'error',
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
  }

  const mergeRes = {
    ...defaultRes,
    ...pick(err, ['status', 'message']),
  }

  return res.status(mergeRes.status).json(mergeRes)
}

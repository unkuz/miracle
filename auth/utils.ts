import jwt from 'jsonwebtoken'
import { KeyObject } from 'crypto'

export const createTokenPair = async (payload: any, publicKey: KeyObject, privateKey: string) => {
  try {
    const accessToken = jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '2 days',
    })
    const refreshToken = jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '7 days',
    })

    return { accessToken, refreshToken }
  } catch (err) {
    return {
      accessToken: null,
      refreshToken: null,
    }
  }
}

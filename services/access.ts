import { hashSync } from 'bcrypt'
import crypto from 'crypto'
import { createTokenPair } from '../auth/utils'
import { Shop } from '../models/shop'
import { KeyTokenService } from './keyToken'
import { pick } from 'lodash'
import { BadRequestError } from '../core/errorResponse'

export class AccessService {
  static async signUp({ name, email, password }: any) {
    const isExistAcc = await Shop.findOne({ email }).lean()

    if (isExistAcc) {
      throw new BadRequestError(`Error: Already exist account with this email`)
    }

    const hashPassword = hashSync(password, 10)
    const shopCreate = await Shop.create({ name, email, password: hashPassword, roles: ['shop'] })

    if (shopCreate) {
      const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: 'pkcs1',
          format: 'pem',
        },
        privateKeyEncoding: {
          type: 'pkcs1',
          format: 'pem',
        },
      })

      // console.log('privateKey', privateKey, publicKey, typeof privateKey, typeof publicKey)

      const publicKeyStr = await KeyTokenService.generate({
        userId: shopCreate._id,
        publicKey,
      })

      if (!publicKeyStr) {
        return {
          code: 'xxx',
          message: 'Error when generate publickey',
          status: 'error',
        }
      }
      const publicKeyObj = crypto.createPublicKey(publicKeyStr)
      console.log('publicKeyObj', publicKeyObj)

      const { accessToken, refreshToken } = await createTokenPair(
        { userId: shopCreate._id, email },
        publicKeyObj,
        privateKey,
      )

      if (accessToken && refreshToken) {
        return {
          code: 201,
          metadata: {
            shop: pick(shopCreate, ['name', 'email', '_id']),
            accessToken,
            refreshToken,
          },
        }
      }
      return {
        code: 200,
        metadata: null,
      }
    }

    try {
    } catch (err: any) {
      return {
        code: 'xxx',
        message: err.message,
        status: 'error',
      }
    }
  }
}

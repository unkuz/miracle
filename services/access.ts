import { hashSync } from 'bcrypt'
import { Shop } from '../models/shop'
import crypto from 'crypto'

export class AccessService {
  static async signUp({ name, email, password }: any) {
    const isExistAcc = await Shop.findOne({ email }).lean()

    if (isExistAcc) {
      return {
        code: 'xxx',
        message: 'Aready exist account',
        status: 'error',
      }
    }

    const hashPassword = hashSync(password, 10)
    const shopCreate = await Shop.create({ name, email, password: hashPassword, roles: ['shop'] })

    if (shopCreate) {
      const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
      })

      console.log({ privateKey, publicKey })
      return shopCreate
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

import { KeyTokenModel } from '../models/keyToken'

export class KeyTokenService {
  static async generate({ userId, publicKey }: any) {
    try {
      const publicKeyStr = String(publicKey)

      const keyTokenCreate = await KeyTokenModel.create({
        user: userId,
        publicKey: publicKeyStr,
      })

      return keyTokenCreate ? keyTokenCreate.publicKey : null
    } catch (err) {
      return null
    }
  }
}

import { apiKeyModel } from '../models/apiKey'

export class APIKeyService {
  static async checkExist(key: string) {
    try {
      return apiKeyModel.findOne({ key, status: true }).lean()
    } catch (error) {
      return null
    }
  }
}

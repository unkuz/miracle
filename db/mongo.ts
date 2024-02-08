import mongoose from 'mongoose'
import { appConfig } from '../config/app'

const { host, port, name } = appConfig.mongoDB

const connectStr = `mongodb://${host}:${port}/${name}`

class MongoDB {
  private static instance: MongoDB | null = null
  public connection: undefined

  constructor() {
    this.connect()
  }

  async connect() {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
    try {
      await mongoose.connect(connectStr, { maxPoolSize: 60 })
      console.log(`MongoDB connect success`)
    } catch (e: any) {
      console.log(`MongoDB connect fail: ${e?.message}`)
    } finally {
      console.log(`MongoDB number of connect MongoDB: ${mongoose.connect.length}`)
    }
  }

  static getInstance() {
    !MongoDB.instance && (MongoDB.instance = new MongoDB())
    return MongoDB.instance
  }
}

export const connectMongoDB = MongoDB.getInstance

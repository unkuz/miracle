import mongoose from 'mongoose'

const connectStr = `mongodb://localhost:27017/miracle`

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
      await mongoose.connect(connectStr)
      console.log(`Connect  MongoDB success`)
    } catch (e: any) {
      console.log(`Connect mongoBD fail: ${e?.message}`)
    } finally {
    }
  }

  static getInstance() {
    !MongoDB.instance && (MongoDB.instance = new MongoDB())
    return MongoDB.instance
  }
}

export const connectMongoDB = MongoDB.getInstance

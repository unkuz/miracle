import { model, Schema } from 'mongoose'

const keyTokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Shop',
    },
    publicKey: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    collection: 'KeyTokens',
  },
)

export const KeyTokenModel = model('KeyToken', keyTokenSchema)

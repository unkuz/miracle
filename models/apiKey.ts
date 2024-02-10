import { Schema, model } from 'mongoose'
const apiKeySchema = new Schema(
  {
    key: {
      type: String,
      unique: true,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    permissions: {
      type: [String],
      required: true,
      enum: ['A', 'B', 'C'],
    },
  },
  {
    timestamps: true,
    collection: 'apikeys',
  },
)

export const apiKeyModel = model('ApiKey', apiKeySchema)

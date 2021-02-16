import * as mongoose from 'mongoose'

export const JobSchema = new mongoose.Schema({
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  company: { type: String, trim: true },
  imageUrl: { type: String, trim: true },
  location: { city: String, state: String, country: String },
  requirements: [String],
  active: Boolean,
  compensation: {
    amount: Number,
    currency: { type: String, trim: true },
    recurrency: { type: String, trim: true },
    isVariable: Boolean
  },
  information: String,
  title: String,
  assignments: [String],
  descriptions: [String],
  totalSpots: Number,
  workingHours: String,
  education: String,
  open: Boolean
}, { timestamps: true, collection: 'jobs' })
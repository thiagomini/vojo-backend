import { Document } from 'mongoose'

// Job está com createdAt como string no banco de dados
export interface IJob extends Document {
  createdBy: string
  updatedBy: string
  company: string
  imageUrl: string
  location: object
  requirements: Array<string>
  active: boolean
  compensation: object
  information: string
  title: string
  assignments: Array<string>
  description: Array<string>
  totalSpots: bigint
  workingHours: string
  education: string
  open: boolean
}
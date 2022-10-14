import { Types } from 'mongoose'
import { StatusPet } from '../utils/enums'

export interface Pets {
    name: string
    userId: Types.ObjectId
    description: string
    species: Types.ObjectId
    gender: string
    size: string
    type: string
    breed: Types.ObjectId
    age: number
    color: string[]
    location: object
    status?: StatusPet
    date?: string
    img: string[]
    observation?: string
    meet:boolean
    createdAt?:string
}

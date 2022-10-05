import { model, Schema } from 'mongoose'
import { Species } from '../interfaces/species'

const SpeciesSchema = new Schema({
    name: { type: String, required: true,unique:true },
})

export default model<Species>('Species', SpeciesSchema)
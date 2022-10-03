import { model, Schema } from 'mongoose'
import { Breed } from '../interfaces/breed'

const BreedSchema = new Schema({
    name: { type: String, required: true, unique:true},
    species: { type: Schema.Types.ObjectId, ref: 'Species' }
})

export default model<Breed>('Breed', BreedSchema)
import { model, Schema } from 'mongoose'
import { Pets } from '../interfaces/pets'

const PetsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    species: { type: Schema.Types.ObjectId, ref: 'Species' },
    sex: { type: String },
    size: { type: String },
    type:{type:String, enum:["Lost","Found"], required:true },
    breed: { type: Schema.Types.ObjectId, ref: 'Breeds' },
    age: { type: Number },
    color: { type: String },
    location: { type: Number },
    status: { type: String, default: 'Active' },
    date: { type: Date },
    img: [{ type: String }],
    observation: { type: String },
    createdAt: { type: Date, default: Date.now },
})

export default model<Pets>('Pet', PetsSchema)

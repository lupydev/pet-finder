import mongoose, {Document, Schema} from 'mongoose';

export interface Pets {
    name:string,

}

export interface PetsModel extends Pets, Document {} 

const PetsSchema : Schema = new Schema (
    {
        name:{type:String, required:true}

    },
)
export default mongoose.model<PetsModel>('Pets',PetsSchema);
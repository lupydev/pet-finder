import mongoose, {Document, Schema, Types} from 'mongoose';

export interface Pets {
    name:string,
    description:string,
    species:Types.ObjectId,
    sex:string,
    size:string,
    race:Types.ObjectId,
    age:number,
    color:string,
    location:number,
    state:string,
    date:string,
    image:string,
    observation:string,
}

export interface PetsModel extends Pets, Document {} 

const PetsSchema : Schema = new Schema (
    {
        name:{type:String, required:true},
        description:{type:String},
        species:{type: Schema.Types.ObjectId, ref: 'Species'},
        sex:{type:String},
        size:{type:String},
        race:{type: Schema.Types.ObjectId, ref: 'Race'},
        age:{type:Number},
        color:{type:String},
        location:{type:Number},
        state:{type:String},
        date:{type:String},
        image:{type:String},
        observation:{type:String},
    },
)


export default mongoose.model<PetsModel>('Pets',PetsSchema);
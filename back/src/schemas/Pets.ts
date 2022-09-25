import {Document, model, Schema, Types} from 'mongoose';

export interface Pets extends Document {
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
    datelost:string,
    image:string,
    observation:string,
}


const PetsSchema = new Schema (
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
        date:{type:Date},
        image:{type:String},
        observation:{type:String},
        createdAt:{type:Date,default:Date.now},
    },
)


export default model<Pets>('Pets',PetsSchema);
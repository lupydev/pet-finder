import {Types} from 'mongoose';
import { StatusPet,T } from '../utils/enums'

export interface Pets {
    name:string,
    description:string,
    species:Types.ObjectId,
    sex:string,
    size:string,
    type:string,
    breed:Types.ObjectId,
    age:number,
    color:string,
    location:number,
    status:StatusPet,
    date:string,
    img:string[],
    observation?:string,
}
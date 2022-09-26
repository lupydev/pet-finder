import {Types} from 'mongoose';

export interface Pets {
    name:string,
    description:string,
    species:Types.ObjectId,
    sex:string,
    size:string,
    breed:Types.ObjectId,
    age:number,
    color:string,
    location:number,
    status:string,
    date:string,
    img:string[],
    observation:string,
}
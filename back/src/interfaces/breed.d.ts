import {Types} from 'mongoose';

export interface Breed {
    name:string,
    species:Types.ObjectId
}
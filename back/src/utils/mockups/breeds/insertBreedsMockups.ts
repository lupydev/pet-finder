import Breed from '../../../schemas/Breed'
import catBreeds from './catBreeds.json'
import dogBreeds from '.././dogBreeds.json'

    
export const insertAllBreeds = async () => {
    const breedsInDB = await Breed.findOne()

    if (!breedsInDB) {
        await Breed.insertMany(catBreeds)
        await Breed.insertMany(dogBreeds)
    }else{null}
}
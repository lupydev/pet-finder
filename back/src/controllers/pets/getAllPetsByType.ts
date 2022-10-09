import Pet from '../../schemas/Pet'
import { Request, Response } from 'express'

const getAllPets = async (req: Request, res: Response) => {
    const { type } = req.params
    const { color, gender, species, breed, name, date, size} = req.query

    console.log(name)

    try {
        const pets = await Pet.find({
            $and: [{ type: { $eq: type }}, {status:"Active"}],
        })
            .and([
                color ? { color: { $regex: `^${color}`, $options: 'i' } } : {},
            ])
            .and([
                gender
                    ? { gender: { $regex: `^${gender}`, $options: 'i' } }
                    : {},
            ])
            .and([
                size
                    ? { size: { $regex: `^${size}`, $options: 'i' } }
                    : {},
            ])
            .and([species ? { species: { $eq: species } } : {}])
            .and([breed ? { breed: { $eq: breed } } : {}])
            .populate({ path: 'breed', select: '_id name' })
            .populate({ path: 'species', select: '_id name' })
            .sort(name === 'asc' ? { name: 1 } : {})
            .sort(name === 'desc' ? { name: -1 } : {})
            .sort(date === 'asc' ? { date: 1 } : {})
            .sort(date === 'desc' ? { date: -1 } : {})


        if (pets.length > 0) {
            return res
                .status(200)
                .json({ pets, ok: true, msg: 'All pets in DB', type: type })
        } else {
            return res.status(204).json({ ok: false, msg: 'No pets in DB' })
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            ok: false,
            msg: 'An error occured, contact with admin',
        })
    }
}

export default getAllPets

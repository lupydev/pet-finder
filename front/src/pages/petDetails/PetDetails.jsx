import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPetById } from '../../redux/asyncActions/pet/getPetById'

const PetDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { PetDetail } = useSelector(
        (state) => state.pet
    )

    useEffect(() => {
      dispatch(getPetById(id))
    }, [])
    
    useEffect(()=>{

        console.log(PetDetail);

    },[PetDetail])

  return (
    <div>PetDetails {id}</div>
  )
}

export default PetDetails
import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import { useField, useFormikContext } from 'formik'
import { useDispatch } from 'react-redux'
import { getBreeds } from '../../../redux/asyncActions/pet/getBreeds'
import { cleanBreeds } from '../../../redux/features/pet/petSlice'

export const SelectWrapper = ({
    name,
    options,
    value = '',
    ...otherProps
}) => {
    const dispatch = useDispatch()
    const { setFieldValue } = useFormikContext()

    const [field, meta] = useField(name)

    const handleChange = (e) => {
        const { value } = e.target
        setFieldValue(name, value)

        if (e.target.name === 'species') {
            // dispatch(cleanBreeds())
            setFieldValue('breed', '')
            dispatch(getBreeds(value))
        }
    }

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        //MUAI creo que esta predefinido
        // variant: 'outlined'
        fullWidth: true,
        onChange: handleChange,
        // value: value,
    }

    if (meta && meta.touched && meta.error) {
        configSelect.error = true
        configSelect.helperText = meta.error
    }

    return (
        <TextField {...configSelect}>
            {options.map((item) => {
                return (
                    <MenuItem key={item._id} value={item._id}>
                        {item.name}
                    </MenuItem>
                )
            })}
        </TextField>
    )
}
export default SelectWrapper

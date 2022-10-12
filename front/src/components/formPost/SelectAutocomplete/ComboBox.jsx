import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { useField, useFormikContext } from 'formik'
import { useDispatch } from 'react-redux'
import { getBreeds } from '../../../redux/asyncActions/pet/getBreeds'

const ComboBox = ({ name, options, ...otherProps }) => {
    const dispatch = useDispatch()
    const { setFieldValue } = useFormikContext()

    const [field, meta] = useField(name)

    const handleChange = (e) => {
        const { value } = e.target
        setFieldValue(name, value)

        if (e.target.name === 'species') {
            dispatch(getBreeds(value))
        }
    }

    const configSelect = {
        ...field,
        ...otherProps,
        fullWidth: true,
        onChange: handleChange,
    }

    if (meta && meta.touched && meta.error) {
        configSelect.error = true
        configSelect.helperText = meta.error
    }

    return (
        <Autocomplete
            disablePortal
            isOptionEqualToValue={(option, value) => option.id === value.id}
            id="combo-box-demo"
            name={name}
            options={options}
            {...configSelect}
            renderInput={(params) => <TextField {...params} label="Breed"/>}
        />
    )
}

export default ComboBox

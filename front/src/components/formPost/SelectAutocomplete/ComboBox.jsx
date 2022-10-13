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
    }

    const configSelect = {
        ...otherProps,
        fullWidth: true,
    }

    if (meta && meta.touched && meta.error) {
        configSelect.error = true
        configSelect.helperText = meta.error
    }

    return (
        <Autocomplete
            getOptionLabel={(option) => {
                return option.name || null
            }}
            disablePortal
            disableClearable
            onChange={(e, value) => setFieldValue('breed', value)}
            isOptionEqualToValue={(option, value) => option.id === value._id}
            name={name}
            options={options}
            renderInput={(params) => (
                <TextField
                    {...configSelect}
                    {...params}
                    {...field}
                    label="Breed"
                />
            )}
        />
    )
}

export default ComboBox

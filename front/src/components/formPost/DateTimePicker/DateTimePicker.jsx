import React from 'react'
import {TextField} from '@mui/material'
import { useField } from 'formik'

export const DateTimePicker = ({
  name,
  ...otherProps
}) => {

  const [field, meta] = useField(name)

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    fullWidth: true,
    // InpoutLabelProps:{
    //   shrink: true
    // }

  }

  if(meta && meta.touched && meta.error){
    configDateTimePicker.error = true
    configDateTimePicker.helperText = meta.error
  }

  return (
    <TextField 
      {...configDateTimePicker}
    />
  )
}
export default DateTimePicker
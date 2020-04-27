import React from 'react'
import Select from 'react-select'
import { customStyles, customErrorStyles } from './select-component-styles'

const SelectComponent = (props) => (

    <Select
        options={props.size ? props.size : props.quantity}
        styles={props.error ? customErrorStyles : customStyles}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
    />
)

export default SelectComponent

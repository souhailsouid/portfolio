import React from 'react'
import PropTypes from 'prop-types'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (

  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label
      ? (<label
        className={`${
          typeof otherProps.value === 'number' || otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
      >
        {label}
      </label>)
      : null}

  </div>
)

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func
}
export default FormInput

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// Components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import LoadingComponent from '../loading/loading.component'
import { register } from '../../redux/user/user.actions'
import './sign-up.styles.scss'

const SignUp = ({ register, isAuthenticated, error, user, isLoading }) => {

  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ""
  })
  // eslint-disable-next-line 
  const [errors, setErrors] = useState([])
  const { name, email, password, confirmPassword } = formData

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      const err = 'Les mots de passe ne correspondent pas!'
      setErrors(err, error)
    }

    else {
      register({ name, email, password })
      setErrors('')
    }

  }

  if (user.user !== null && isAuthenticated) {
    return <Redirect to='/' />
  }




  return isLoading && user.user !== null ? <LoadingComponent /> : (
    <div className="sign-up">
      <h2 className="title">Je n&apos;ai pas de compte</h2>

      <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type="text"
          name="name"
          value={name}
          handleChange={(e) => handleChange(e)}
          label="Nom"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={(e) => handleChange(e)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={(e) => handleChange(e)}
          label={password.length >= 6 ? 'Mot de passe' : 'Un mot de passe comprenant au moins 6 caractères'}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={(e) => handleChange(e)}
          label="Confirmer votre mot de passe"
          required
        />
        <CustomButton type="submit">S&apos;inscrire</CustomButton>
        {/* {notification ?
          < Notification error={notification} />
          : null} */}

      </form>

    </div>
  )

}

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.user,
  user: state.user,
  error: state.notification.signUpErr
})


export default connect(mapStateToProps, { register })(SignUp)



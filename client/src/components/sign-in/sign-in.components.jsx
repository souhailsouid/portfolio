
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login } from '../../redux/user/user.actions'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import Notification from '../notification/notification.component'
import './sign-in.styles.scss'
const SignIn = ({ login, error }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData


  const handleSubmit = async (event) => {
    event.preventDefault()
    login(email, password)


  }
  const handleChange = (event) => {
    const { value, name } = event.target
    setFormData({ ...formData, [name]: value })
  }



  return (
    <section className="sign-in">
      <h1>J&apos;ai déjà un compte</h1>
      <span>Se connecter avec son adresse email</span>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name='email'
          type='email'
          handleChange={(e) => handleChange(e)}
          value={email}
          label='email'
          required
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={(e) => handleChange(e)}
          label='password'
          required
        />
        <section className="buttons">
          <CustomButton type="submit">Se connecter  &nbsp;  </CustomButton>
          {error ?
            <Notification error={error} />
            : null}
        </section>
      </form>


    </section>
  )
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,

}

const mapStateToProps = state => ({
  error: state.notification.signInErr,
  isAuthenticated: state.user.isAuthenticated
})
const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(SignIn))

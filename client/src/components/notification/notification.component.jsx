import React from 'react'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'
import './notification.styles.scss'
const Notification = ({ error }) => {
  return (
    <Message
      className="style"
      error={error}
      header='Oups, il y a quelques erreurs!'
      list={
        error
      }
    />
  )
}
Notification.propTypes = {
  success: PropTypes.object,
  error: PropTypes.object

}

export default Notification

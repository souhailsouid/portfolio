import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Image } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import profileDefaultImage from '../../assets/profile.png'
import { logout } from '../../redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentProfile } from '../../redux/profile/profile.selectors'
import ModalComponent from '../modal/modal.component'

const DropdownImageTrigger = ({ profile, children, logout }) => {
  const { imageUrl } = profile || {}
  const [modal, setModal] = useState(false)

  // logout
  const showModal =
    <ModalComponent
      open={modal}
      onClose={() => setModal(false)}
      enabledFunction={logout}
      content="Vous êtes sur le point de vous déconnecter."
      title="Déconnexion"
      cancelButton="revenir"
      confirmButton="Se déconnecter" />


  return (
    <Fragment>
      <Dropdown
        trigger={
          <span>
            <Image avatar src={imageUrl || profileDefaultImage} />  {children}
          </span>}
        pointing='top left'
        icon={null}
      >
        <Dropdown.Menu>
          <Dropdown.Item text="Services" as={Link} to='/services' />
          <Dropdown.Item onClick={() => setModal(true)}>Déconnexion</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown >
      {showModal}
    </Fragment>
  )

}
DropdownImageTrigger.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  logout: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = createStructuredSelector({
  profile: selectCurrentProfile,
})

export default withRouter(connect(mapStateToProps, { logout })(DropdownImageTrigger))

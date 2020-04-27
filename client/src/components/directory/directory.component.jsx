import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const Directory = ({ sections }) => (
  <section className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </section>

)

Directory.propTypes = {
  sections: PropTypes.array.isRequired
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  user: selectCurrentUser,

})
export default connect(mapStateToProps)(Directory)

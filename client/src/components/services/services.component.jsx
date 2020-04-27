import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectServicesSections } from '../../redux/services/service.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import ServiceItem from '../service-item/service-item.component'
// import { customToastify } from '../custom-toastify/custom-toastify'
import './services.styles.scss'

const Services = ({ services, user }) => {
    console.log("services", services, user)
    return (
        <section className='service'>

            {services.map(({ id, ...otherSectionProps }) => (
                <ServiceItem key={id} {...otherSectionProps} />
            ))}


        </section>

    )
}
Services.propTypes = {
    services: PropTypes.array.isRequired
}
const mapStateToProps = createStructuredSelector({
    services: selectServicesSections,
    user: selectCurrentUser
})
export default connect(mapStateToProps)(Services)

import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import Services from '../../components/services/services.component'
import ServicesPage from '../profile/profile.component'
import PropTypes from 'prop-types'

const ServicePage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={Services} />
        <Route exact path={`${match.path}/:serviceId`} component={ServicesPage} />
    </div>
)

ServicePage.propTypes = {
    match: PropTypes.object
}
export default withRouter(ServicePage)
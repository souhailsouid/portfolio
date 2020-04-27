
import React from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'
import ProductOverview from '../../components/product-overview/product-overview.component'

const ProductPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}/:collectionId/:id`} component={ProductOverview} />
    </div>
)

ProductPage.propTypes = {
    match: PropTypes.object
}

export default withRouter(ProductPage)

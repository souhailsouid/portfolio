import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProductItem from '../product-item/product-item.component'
import { selectCollection } from '../../redux/shop/shop.selector'
import './product-overview.styles.scss'

const ProductOverview = ({ collection, match }) => {
    const { items } = collection
    return (
        items.filter((item, id) => id === match.params.id - 1)
            .map(item => (
                <ProductItem key={item.id - 1} item={item} />

            ))
    )
}
ProductOverview.propTypes = {
    collection: PropTypes.object
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
})
export default withRouter(connect(mapStateToProps)(ProductOverview))
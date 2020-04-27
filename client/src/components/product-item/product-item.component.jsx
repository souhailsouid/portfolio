import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import WishListButton from '../add-item-to-wish-list/add-item-to-wish-list.component'
import SelectItemBySize from '../select-item-by-size/select-item-by-size.component'
import { addItemToWishList } from '../../redux/wishList/wish-list.actions'
import { connect } from 'react-redux'
import './product-item.styles.scss'
export const add = ({ item, match }) => {
    const { id, name, imageUrl, price } = item

    return (
        Object.assign({
            id: id,
            name: name,
            imageUrl: imageUrl,
            price: price,
            collection: match.params.collectionId

        })
    )
}

const ProductItem = ({ item }) => (
    <article className="product-item" >
        <img className="image" style={{ backgroundImage: `url(${item.imageUrl})` }} alt='' />
        <section className="product">
            <header className="header">
                <h2 className="name">{item.name}</h2>
                <WishListButton />
            </header>
            <SelectItemBySize value={add} />
        </section>
    </article>
)

ProductItem.propTypes = {
    item: PropTypes.object.isRequired,
    addItemToWishList: PropTypes.func.isRequired
}
const mapDispatchToProps = (dispatch) => ({
    addItemToWishList: item => dispatch(addItemToWishList(item))

})
export default withRouter(connect(null, mapDispatchToProps)(ProductItem))

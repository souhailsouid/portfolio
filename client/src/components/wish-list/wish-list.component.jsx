import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import { selectWhishListCartItems } from '../../redux/wishList/wish-list.selectors'
import { createStructuredSelector } from 'reselect'
import './wish-list.styles.scss'

const WishCartDropdown = ({ WishListItems }) => (
    <article className='cart-dropdown'>
        <secion className='cart-items' >
            {WishListItems.length
                ? (WishListItems.map(WishListItem =>
                    <CartItem key={WishListItem.id} item={WishListItem} />))
                : (
                    <span className="empty-message">
                        Votre liste est vide
                    </span>
                )
            }
        </secion>

    </article>
)

WishCartDropdown.propTypes = {
    WishListItems: PropTypes.object,

}
const mapStateToProps = createStructuredSelector({
    WishListItems: selectWhishListCartItems
})
export default withRouter(connect(mapStateToProps, null)(WishCartDropdown))

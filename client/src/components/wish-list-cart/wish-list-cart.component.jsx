import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/wishList/wish-list.actions'
import { selectWhishListCartItems } from '../../redux/wishList/wish-list.selectors'


import './whish-list-cart.styles.scss'

const WishListCart = ({ toggleCartHidden, wishLists }) => (
    <div className={wishLists.length ? 'wish-cart-not-empty' : "wish-cart-empty"} onClick={toggleCartHidden} >
        <i class="fa fa-heart" aria-hidden="true"></i> &nbsp; Liste d'envies

    </div>
)
WishListCart.propTypes = {
    toggleCartHidden: PropTypes.func,

}
const mapStateToProps = (state) => ({
    wishLists: selectWhishListCartItems(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})



export default connect(mapStateToProps, mapDispatchToProps)(WishListCart)

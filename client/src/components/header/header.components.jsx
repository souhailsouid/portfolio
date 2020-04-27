import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import logo from '../../assets/logo.png'
import PropTypes from 'prop-types'
import DropdownImageTrigger from '../dropdownImageTrigger/dropdownImageTrigger.component.jsx'
import CartIcon from '../cart-icon/cart-icon.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectWishListCartHidden } from '../../redux/wishList/wish-list.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import WishListCart from '../wish-list-cart/wish-list-cart.component'
import WishCartDropdown from '../wish-list/wish-list.component'
import './header.styles.scss'

export const Header = ({ currentUser, hidden, hiddeWishListCart }) => (
  <header className="header-menu">
    <Link to="/">
      <img src={logo} className="logo" alt="logo-zenika" />
    </Link>

    <section className="options" >
      <Link className="option" to="/shop"> Shop </Link>
      <WishListCart />
      {hiddeWishListCart ? null : <WishCartDropdown />}
      {currentUser
        ?
        <Fragment>
          <DropdownImageTrigger
          >
            <span>{currentUser
              ? currentUser.displayName
              : currentUser.name
            }
            </span>
          </DropdownImageTrigger>
        </Fragment>
        : <Link className="option" to="/login">Se connecter</Link>}
      <CartIcon />
      {hidden ? null : <CartDropdown />}

    </section>


  </header >
)

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool,
  hiddeWishListCart: PropTypes.bool

}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  hiddeWishListCart: selectWishListCartHidden
})

export default connect(mapStateToProps)(Header)

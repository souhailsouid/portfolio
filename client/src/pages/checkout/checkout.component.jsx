import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CustomButton from '../../components/custom-button/custom-button.component'
import './checkout.styles.scss'
const CheckoutPage = ({ cartItems, total, history }) => (
  <article className="checkout-page">
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      )}

    {total === 0 ? null :
      <footer className="total">
        <span>Total: {total} euros </span>

        <CustomButton onClick={() => { history.push('/selectionlivraison') }} style={{ marginTop: '20px', marginLeft: 'auto' }} >
          Choisir ma livraison
      </CustomButton>
      </footer>
    }

  </article>
)

CheckoutPage.propTypes = {
  cartItems: PropTypes.func,
  total: PropTypes.func,
  history: PropTypes.object

}
const mapSateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})
export default connect(mapSateToProps)(CheckoutPage)

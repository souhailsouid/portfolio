import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'


import { addItemToWishList } from '../../redux/wishList/wish-list.actions'

const CheckoutItem = ({ addItemToWishList, cartItem, clearItem, addItem, removeItem, wishList }) => {
  const { name, imageUrl, price, quantity, size, collection } = cartItem
  const isAddInWishList = wishList.find(item => item.name === name && item.collection === collection)
  return (
    <article>
      <section className="checkout">
        <img src={imageUrl} alt='item' className="image-container" />
        <div className="checkout-info">
          <header className="checkout-header" >
            <span className="name"><b>{name}</b></span>
            &nbsp;
          <b className="price" >{price} €</b>
          </header>
          <section style={{ marginTop: '1rem' }}>
            <p > Collection: {collection}</p>
            <p >Taille {size}</p>
          </section>
          <footer className="checkout-footer">
            <span className="remove-button" onClick={() => addItemToWishList(cartItem)}> {!isAddInWishList ? "Sauvegarder dans ma liste" : "Retirer de la liste"}</span> |
          <span className="remove-button" onClick={() => clearItem(cartItem)}> Supprimer</span> |
            <span className="quantity">
              {/* <SelectComponent onClick={() => addItem(cartItem)} /> */}
              <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
              <span className="value">{quantity}</span>
              <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>

          </footer>
        </div>
      </section>

    </article >
  )
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
  clearItem: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  addItemToWishList: PropTypes.func
}
const mapStateToProps = (state) => ({
  wishList: state.wishList.wishLists
})
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItemToWishList: item => dispatch(addItemToWishList(item))

})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem)

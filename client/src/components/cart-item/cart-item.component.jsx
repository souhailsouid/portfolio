import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import { addItemToWishList } from '../../redux/wishList/wish-list.actions'
import './cart-item.styles.scss'

const CartItem = ({ item, match, history, addItemToWishList, wishListItem }) => {
  const { collection, id, imageUrl, price, name, quantity, size } = item
  const item_Filtered_By_Collection_And_Id = wishListItem.find(item => item.id === id && item.collection === collection)

  return (
    <article className={match.url === '/services/favoris' || match.url === '/checkout' ? "cart-item-services" : "cart-item"}>
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name"><b>{collection ? collection.toUpperCase() : null}</b></span>
        <span className="name">{name}</span>
        {size ?
          <Fragment>
            <span className="name">Taille {size}</span>
            <span className="price">{quantity} * {price} Euros</span>
          </Fragment>
          : <span className="price"> {price} Euros</span>
        }
        {match.url === '/services/favoris' || match.url === '/checkout' ? <footer className="footer-wish-list">
          <CustomButton
            onClick={() => addItemToWishList(item_Filtered_By_Collection_And_Id)}
            outOfStock
          >
            Supprimer
          </CustomButton>
          <CustomButton
            onClick={() => history.push(`/product/${collection}/${id}`)}
            inverted
          >
            Voir le produit
      </CustomButton>
        </footer> : null}
      </div>


    </article>

  )
}

CartItem.propTypes = {
  item: PropTypes.object,
  history: PropTypes.object,
  wishListItem: PropTypes.object,
  addItemToWishLis: PropTypes.func
}
const mapStateToprops = state => ({
  wishListItem: state.wishList.wishLists
})
const mapDispatchToProps = (dispatch) => ({
  addItemToWishList: item => dispatch(addItemToWishList(item)),

})
export default withRouter(connect(mapStateToprops, mapDispatchToProps)(CartItem))

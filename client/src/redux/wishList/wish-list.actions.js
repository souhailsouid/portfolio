import CartActionTypes from './wish-list.types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_WHISH_LIST_CART_HIDDEN
})

export const addItemToWishList = item => ({
  type: CartActionTypes.ADD_ITEM_WHISH_LIST,
  payload: item
})
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})

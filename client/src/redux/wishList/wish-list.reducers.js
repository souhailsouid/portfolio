
import CartActionTypes from './wish-list.types'
import { addItemToWhishList} from './wish-list.utils'
const INITIAL_STATE = {
  hiddeWishListCart: true,
  wishLists: [],
 

}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_WHISH_LIST_CART_HIDDEN:
      return {
        ...state,
        hiddeWishListCart: !state.hiddeWishListCart
      }
   
    case CartActionTypes.ADD_ITEM_WHISH_LIST:
      return {
        ...state,
        wishLists: addItemToWhishList(state.wishLists, action.payload)
      }
    case CartActionTypes.CLEAR_WHISH_LIST_FROM_CART:
      return {
        ...state,
        wishLists: state.wishLists.filter(
          whishList => whishList.id !== action.payload.id
        )
      }
  
    default:
      return state
  }
}
export default cartReducer

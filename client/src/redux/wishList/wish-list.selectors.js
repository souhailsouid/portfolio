import { createSelector } from 'reselect'

const selectWishListCart = state => state.wishList
export const selectWhishListCartItems = createSelector(
  [selectWishListCart],
  (wishList) => wishList.wishLists
)
export const selectWishListCartHidden = createSelector(
  [selectWishListCart],
  (wishList) => wishList.hiddeWishListCart
)



export const addItemToWhishList = (wishLists, wishItemToAdd) => {
  const existingWishListCart = wishLists.find(wishList => wishList.id === wishItemToAdd.id && wishList.collection === wishItemToAdd.collection)
  if (existingWishListCart) {
    return wishLists.filter(wishList =>  wishList !== existingWishListCart  )
  }
  return [...wishLists, { ...wishItemToAdd }]
}



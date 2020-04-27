
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id && cartItem.collection === cartItemToAdd.collection &&   cartItem.size === cartItemToAdd.size)
  if (existingCartItem) {
    return cartItems.map(cartItem => {

      return  (
      cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size && cartItem.collection === cartItemToAdd.collection
        ? { ...cartItem, 
          size: cartItem.size,
          quantity: cartItem.quantity + 1 
        } : cartItem)
      })
  }
  return [...cartItems, { ...cartItemToAdd }]
}



export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id)

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem =>
      cartItem.id !== cartItemToRemove.id
    )
  }
  return cartItems.map(
    cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  )
}

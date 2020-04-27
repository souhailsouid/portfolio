import { combineReducers } from 'redux';

import userReducer from './user/user.reducers'
import notificationReducer from './notification/notification.reducers'
import directoryReducer from './directory/directory.reducers'
import serviceReducer from "./services/service.reducers"
import wishListReducer from './wishList/wish-list.reducers'
import shopReducer from './shop/shop.reducers'
import cartReducer from './cart/cart.reducers'
import profileReducer from './profile/profile.reducers';
 const rootReducer = combineReducers({  
  user: userReducer,
  notification: notificationReducer,
  directory: directoryReducer,
  services: serviceReducer,
  wishList: wishListReducer,
  cart: cartReducer,
  shop: shopReducer,
  profile: profileReducer
});
export default rootReducer
import { combineReducers } from "redux";

import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cart-reducers";
import directoryReducer from "./directory/directoryReducers";
import shopReducer from "./shop/shopReducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

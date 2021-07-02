import { combineReducers } from "redux";

import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cart-reducers";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});

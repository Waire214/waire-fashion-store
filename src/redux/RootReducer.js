import { combineReducers } from "redux";

import cartReducer from "./cart/CartReducer";
import UserReducer from "./user/UserReducer";

export default combineReducers({
    user: UserReducer,
    cart: cartReducer
})
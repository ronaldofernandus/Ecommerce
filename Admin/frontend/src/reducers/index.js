import { combineReducers } from "redux";
import productReducers from "./product";
import orderReducers from "./order";
import cartListReducers from "./cart";

export default combineReducers({
  productReducers,
  orderReducers,
  cartListReducers,
});

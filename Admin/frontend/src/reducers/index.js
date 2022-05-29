import { combineReducers } from "redux";
import productReducers from "./product";
import orderReducers from "./order";

export default combineReducers({
  productReducers,
  orderReducers,
});

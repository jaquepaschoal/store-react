import { combineReducers } from "redux";

import categories from "./categories";
import categoryDetails from "./categoryDetails";
import productDetails from "./productDetails";
import cart from "./cart";

export default combineReducers({
  categories,
  categoryDetails,
  productDetails,
  cart
});

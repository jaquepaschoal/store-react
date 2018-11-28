import { combineReducers } from "redux";

import categories from "./categories";
import categoryDetails from "./categoryDetails";
import productDetails from "./productDetails";

export default combineReducers({
  categories,
  categoryDetails,
  productDetails
});

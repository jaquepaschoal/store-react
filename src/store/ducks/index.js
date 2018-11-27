import { combineReducers } from "redux";

import categories from "./categories";
import categoryDetails from "./categoryDetails";

export default combineReducers({
  categories,
  categoryDetails
});

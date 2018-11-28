import { all, takeLatest } from "redux-saga/effects";

import { Types as CategoriesTypes } from "../ducks/categories";
import { getCategories } from "./categories";

import { Types as CategoryDetailsTypes } from "../ducks/categoryDetails";
import { getCategoryDetails } from "./categoryDetails";

import { Types as ProductDetailsTypes } from "../ducks/productDetails";
import { getProductDetails } from "./productDetails";

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(CategoryDetailsTypes.GET_REQUEST, getCategoryDetails),
    takeLatest(ProductDetailsTypes.GET_REQUEST, getProductDetails)
  ]);
}

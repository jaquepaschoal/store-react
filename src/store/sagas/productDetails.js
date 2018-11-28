import api from "../../services/api";
import { call, put } from "redux-saga/effects";

import { Creators as ProductDetails } from "../ducks/productDetails";

export function* getProductDetails(action) {
  try {
    const response = yield call(api.get, `/products/${action.payload.id}`);

    yield put(ProductDetails.getProductDetailsSuccess(response.data));
  } catch (err) {
    console.log("não foi possivel listar os detalhes do produto.");
  }
}

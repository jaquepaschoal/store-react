import api from "../../services/api";
import { call, put } from "redux-saga/effects";

import { Creators as CategoryDetails } from "../ducks/categoryDetails";

export function* getCategoryDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/category_products/${action.payload.id}`
    );

    yield put(CategoryDetails.getCategoryDetailsSuccess(response.data));
  } catch (err) {
    console.log("não foi possivel listar a categoria.");
  }
}

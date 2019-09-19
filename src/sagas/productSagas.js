import { call, takeLatest, put } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure
} from "../actions/productAction";
import HttpHelper from "../utils/httpHelper";

const { getRequest } = new HttpHelper();

function* getProduct(action) {
  try {
    const payloadData = {
      url: "https://assignment-appstreet.herokuapp.com/api/v1/products?page=1"
    };

    yield put(getProductsRequest());

    const { data, status } = yield call(getRequest, payloadData);

    if (status === 200) {
      const { products } = data;

      yield put(getProductsSuccess(products));
    } else {
      yield put(getProductsFailure());
    }
  } catch (error) {
    yield put(getProductsFailure());
  }
}

function* productSagas() {
  yield [takeLatest(GET_PRODUCTS, getProduct)];
}

export default productSagas;

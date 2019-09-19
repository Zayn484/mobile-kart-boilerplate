import { call, takeLatest, put } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  GET_PRODUCT_BY_ID,
  getProductByIdRequest,
  getProductByIdSuccess,
  getProductByIdFailure
} from "../actions/productAction";
import HttpHelper from "../utils/httpHelper";

const { getRequest } = new HttpHelper();

function* getProduct(action) {
  try {
    const payloadData = {
      url: "https://assignment-appstreet.herokuapp.com/api/v1/products?page=1"
    };

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

function* getProductById(action) {
  try {
    const payloadData = {
      url:
        "https://assignment-appstreet.herokuapp.com/api/v1/products/5aec58965a39460004b3f6dd"
    };

    yield put(getProductByIdRequest());

    const { data, status } = yield call(getRequest, payloadData);

    if (status === 200) {
      const { products } = data;

      yield put(getProductByIdSuccess(products));
    } else {
      yield put(getProductByIdFailure());
    }
  } catch (error) {
    yield put(getProductByIdFailure());
  }
}

function* productSagas() {
  yield [
    takeLatest(GET_PRODUCTS, getProduct),
    takeLatest(GET_PRODUCT_BY_ID, getProductById)
  ];
}

export default productSagas;

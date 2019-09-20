import { call, takeLatest, put, select } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  GET_PRODUCT_BY_ID,
  getProductByIdRequest,
  getProductByIdSuccess,
  getProductByIdFailure,
  clearProductList
} from "../actions/productAction";
import HttpHelper from "../utils/httpHelper";
import { BASE_URL } from '../config';

const { getRequest } = new HttpHelper();

function* getProduct({payload}) {
  try {
    const { pageNo } = payload;

    const productListState = (state) => state.product.productsList;

    const getProductList = yield select(productListState);

    if(pageNo ==1 && !!getProductList.length) {
      yield put(clearProductList());
    }

    const payloadData = {
      url: `${BASE_URL}?page=${pageNo}`
    };

    yield put(getProductsRequest());
  
    const { data, status } = yield call(getRequest, payloadData);
    
    if (status === 200) {
      const { products } = data;
      
      yield put(getProductsSuccess(data));
    } else {
      yield put(getProductsFailure());
    }
  } catch (error) {
    yield put(getProductsFailure());
  }
}

function* getProductById({ payload }) {
  try {
    const payloadData = {
      url: `${BASE_URL}/${payload}`,
    };

    yield put(getProductByIdRequest());

    const { data, status } = yield call(getRequest, payloadData);
  
    if(status === 200) {  
      yield put(getProductByIdSuccess(data));
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

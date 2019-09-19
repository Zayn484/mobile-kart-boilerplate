import { call, takeLatest, put } from 'redux-saga/effects';
import { GET_PRODUCTS, getProductsRequest, getProductsSuccess, getProductsFailure } from '../actions/productAction';
import HttpHelper from '../utils/httpHelper';

const { getRequest } = new HttpHelper();

function* getProduct(action) {


  const payloadData = {
    url: 'https://assignment-appstreet.herokuapp.com/api/v1/products?page=1',
  };

  yield put(getProductsRequest());

  const { data, status } = yield call(getRequest, payloadData);

  console.log('yes iam calles', data);
}

function* productSagas() {
  yield [takeLatest(GET_PRODUCTS, getProduct)];
};

export default productSagas;

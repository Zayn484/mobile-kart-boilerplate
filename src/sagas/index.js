import { fork, all } from 'redux-saga/effects';
import productSagas from './productSagas';

const sagas = function* sagas() {
  yield all([fork(productSagas)]);
};

export { sagas };

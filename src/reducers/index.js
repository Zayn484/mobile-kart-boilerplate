import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

const appReducer = combineReducers({
  product: productReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export { rootReducer };

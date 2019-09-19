import { 
         GET_PRODUCTS_REQUEST,
         GET_PRODUCTS_SUCCESS,
         GET_PRODUCTS_FAILURE   
       } from '../actions/productAction';

const initialState = {
   isLoading: false,
   productsList: []
};

const productReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
      
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        productsList: payload
      };
    }
    
    case GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
    return state;
  }
};

export { productReducer };

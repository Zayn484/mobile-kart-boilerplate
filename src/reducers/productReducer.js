import { 
         GET_PRODUCTS_REQUEST,
         GET_PRODUCTS_SUCCESS,
         GET_PRODUCTS_FAILURE,
         GET_PRODUCT_BY_ID_REQUEST,
         GET_PRODUCT_BY_ID_SUCCESS,
         GET_PRODUCT_BY_ID_FAILURE   
       } from '../actions/productAction';

const initialState = {
   isLoading: false,
   productsList: [],
   productDetailById: {}
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

    case GET_PRODUCT_BY_ID_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
      
    case GET_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        productsList: payload
      };
    }
    
    case GET_PRODUCT_BY_ID_FAILURE: {
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

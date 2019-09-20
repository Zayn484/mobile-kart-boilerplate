import { 
         GET_PRODUCTS_REQUEST,
         GET_PRODUCTS_SUCCESS,
         GET_PRODUCTS_FAILURE,
         GET_PRODUCT_BY_ID_REQUEST,
         GET_PRODUCT_BY_ID_SUCCESS,
         GET_PRODUCT_BY_ID_FAILURE,
         UPDATE_PRODUCT_FIELDS,
         CLEAR_PRODUCTS_LIST   
       } from '../actions/productAction';

const initialState = {
   isLoading: false,
   productsList: [],
   productDetailById: {},
   currentProductList: [],
   selectedProductAttr: {},
};

const productReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case UPDATE_PRODUCT_FIELDS: {
      const { selected_option_ids, product_variations } =  payload;

      const [ selectedProductAttr ] = product_variations.filter((item) => item.sign.every( e => selected_option_ids.includes(e) ));

     return {
       ...state,
       productDetailById: payload,
       selectedProductAttr
      }
    }

    case CLEAR_PRODUCTS_LIST: 
      return {
        ...state,
         productsList: []
      }
      
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
      
    case GET_PRODUCTS_SUCCESS: {
      console.log('products getting', payload.products);

      return {
        ...state,
        isLoading: false,
        currentProductList: payload.products,
        productsList: [ ...state.productsList, ...payload.products ]
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
      const { selected_option_ids, product_variations } =  payload;

      const [ selectedProductAttr ] = product_variations.filter((item) => item.sign.every( e => selected_option_ids.includes(e) ));

      return {
        ...state,
        isLoading: false,
        productDetailById: payload,
        isLoading: false,
        selectedProductAttr
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

import { createAction } from 'redux-actions';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const getProducts = createAction(GET_PRODUCTS);

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const getProductsRequest = createAction(GET_PRODUCTS_REQUEST);

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const getProductsSuccess = createAction(GET_PRODUCTS_SUCCESS);

export const CLEAR_PRODUCTS_LIST = 'CLEAR_PRODUCTS_LIST';
export const clearProductList = createAction(CLEAR_PRODUCTS_LIST);

export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const getProductsFailure = createAction(GET_PRODUCTS_FAILURE);

export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const getProductById = createAction(GET_PRODUCT_BY_ID);

export const GET_PRODUCT_BY_ID_REQUEST = 'GET_PRODUCT_BY_ID_REQUEST';
export const getProductByIdRequest = createAction(GET_PRODUCT_BY_ID_REQUEST);

export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS';
export const getProductByIdSuccess = createAction(GET_PRODUCT_BY_ID_SUCCESS);

export const GET_PRODUCT_BY_ID_FAILURE = 'GET_PRODUCT_BY_ID_FAILURE';
export const getProductByIdFailure = createAction(GET_PRODUCT_BY_ID_FAILURE);

export const UPDATE_PRODUCT_FIELDS = 'UPDATE_PRODUCT_FIELDS';
export const updateProductFields = createAction(UPDATE_PRODUCT_FIELDS);

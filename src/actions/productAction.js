import { createAction } from 'redux-actions';

export const COMPUTE_PAYSLIP = 'PAYSLIPS/COMPUTE_PAYSLIP';
export const computePayslip = createAction(COMPUTE_PAYSLIP);

export const COMPUTE_PAYSLIP_REQUEST = 'PAYSLIPS/COMPUTE_PAYSLIP_REQUEST';
export const computePayslipRequest = createAction(COMPUTE_PAYSLIP_REQUEST);

export const COMPUTE_PAYSLIP_SUCCESS = 'PAYSLIPS/COMPUTE_PAYSLIP_SUCCESS';
export const computePayslipSuccess = createAction(COMPUTE_PAYSLIP_SUCCESS);

export const COMPUTE_PAYSLIP_FAILURE = 'PAYSLIPS/COMPUTE_PAYSLIP_FAILURE';
export const computePayslipFailure = createAction(COMPUTE_PAYSLIP_FAILURE);

export const COMPUTE_PAYSLIP_RESET = 'PAYSLIPS/COMPUTE_PAYSLIP_RESET';
export const computePayslipReset = createAction(COMPUTE_PAYSLIP_RESET);

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const getProducts = createAction(GET_PRODUCTS);

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const getProductsRequest = createAction(GET_PRODUCTS_REQUEST);

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const getProductsSuccess = createAction(GET_PRODUCTS_SUCCESS);

export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const getProductsFailure = createAction(GET_PRODUCTS_FAILURE);

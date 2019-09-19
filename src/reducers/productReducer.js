import { productAction } from '../actions';

const initialState = {
  payslips: [],
  computePayslipRequestStatus: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productAction.COMPUTE_PAYSLIP_REQUEST: {
      return state;
    }
      
    case productAction.COMPUTE_PAYSLIP_SUCCESS: {
      return state;
    }
    
    case productAction.COMPUTE_PAYSLIP_RESET: {
      return state;
    }

    default:
    return state;
  }
};

export { productReducer };

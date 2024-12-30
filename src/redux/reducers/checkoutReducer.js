import {
  SET_ACTIVE_STEP,
  SET_SELECTED_ADDRESS,
  SET_SELECTED_PAYMENT,
  ADD_ADDRESS,
  SET_ORDER_CONFIRMED,
  SET_DISCOUNT,
  SET_DELIVERY_CHARGE,
} from "../actions/checkoutActions";

const initialState = {
  activeStep: 1,
  selectedAddress: null,
  selectedPayment: null,
  addresses: [],
  orderConfirmed: false,
  discount: 0,
  deliveryCharge: 5,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };

    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload,
      };

    case SET_SELECTED_PAYMENT:
      return {
        ...state,
        selectedPayment: action.payload,
      };

    case ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case SET_ORDER_CONFIRMED:
      return {
        ...state,
        orderConfirmed: action.payload,
      };

    case SET_DISCOUNT:
      return {
        ...state,
        discount: action.payload,
      };

    case SET_DELIVERY_CHARGE:
      return {
        ...state,
        deliveryCharge: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;

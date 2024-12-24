export const SET_ACTIVE_STEP = 'SET_ACTIVE_STEP';
export const SET_SELECTED_ADDRESS = 'SET_SELECTED_ADDRESS';
export const SET_SELECTED_PAYMENT = 'SET_SELECTED_PAYMENT';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const SET_ORDER_CONFIRMED = 'SET_ORDER_CONFIRMED';
export const SET_DISCOUNT = 'SET_DISCOUNT';
export const SET_DELIVERY_CHARGE = 'SET_DELIVERY_CHARGE';

export const setActiveStep = (step) => ({
  type: SET_ACTIVE_STEP,
  payload: step,
});

export const setSelectedAddress = (address) => ({
  type: SET_SELECTED_ADDRESS,
  payload: address,
});

export const setSelectedPayment = (payment) => ({
  type: SET_SELECTED_PAYMENT,
  payload: payment,
});

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
});

export const setOrderConfirmed = (confirmed) => ({
  type: SET_ORDER_CONFIRMED,
  payload: confirmed,
});

export const setDiscount = (discount) => ({
  type: SET_DISCOUNT,
  payload: discount,
});

export const setDeliveryCharge = (charge) => ({
  type: SET_DELIVERY_CHARGE,
  payload: charge,
});
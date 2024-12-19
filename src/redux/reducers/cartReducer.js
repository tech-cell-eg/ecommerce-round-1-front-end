import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QUANTITY,
  CLEAR_CART,
} from "../actions/cartActions";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  let existingItem;

  switch (action.type) {
    case ADD_TO_CART:
      existingItem = state.items.find(
        (item) => item.id === action.payload.productId
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.itemId
            ? {
                ...item,
                quantity: Math.max(item.quantity + action.payload.quantity, 1),
              }
            : item
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;

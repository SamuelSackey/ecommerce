import { UPDATE_CART_PRICE } from "../constants";

const initialState = {
  totalPrice: 0,
};

export const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload,
      };

    default:
      return state;
  }
};

import { ADD_TO_CART } from "../constants";

const initialState = {
  numberOfProducts: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        numberOfProducts: state.numberOfProducts + action.payload,
      };

    default:
      return state;
  }
};

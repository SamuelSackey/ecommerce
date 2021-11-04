import { ADD_TO_CART } from "../constants";

const initialState = {
  numberOfProducts: 0,
  listOfProducts: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        numberOfProducts: state.numberOfProducts + 1,
        listOfProducts: [...state.listOfProducts, ...action.payload],
      };

    default:
      return state;
  }
};

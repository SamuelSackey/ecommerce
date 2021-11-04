import { ADD_TO_CART } from "../constants";

export const addItemToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};

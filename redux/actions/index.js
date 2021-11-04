import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

export const addItemToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
};

export const removeItemFromCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
  };
};

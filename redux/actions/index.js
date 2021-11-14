import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_PRICE,
} from "../constants";

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

export const clearItemsFromCart = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CART,
    });
  };
};

export const updateCartPrice = (price) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CART_PRICE,
      payload: price,
    });
  };
};

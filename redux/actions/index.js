import { ADD_TO_CART } from "../constants";

export const addItemToCart = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: 1,
    });
  };
};

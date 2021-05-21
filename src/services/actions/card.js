import url from "../../utils/config";

export const INCREASE_INGREDIENT = "INCREASE_INGREDIENT";
export const DECREASE_INGREDIENT = "DECREASE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const ADD_INGREDIENTS_BUN = "ADD_INGREDIENTS_BUN";
export const ADD_INGREDIENTS_FILLINGS = "ADD_INGREDIENTS_FILLINGS";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const TAB_SWITCH = "TAB_SWITCH";

export const getIngredients = () => {  
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`ошибка: ` + res.status);
        } else {
          return res.json();
        }
      })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            data: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
};

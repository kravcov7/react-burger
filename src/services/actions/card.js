import url from "../../utils/config";

export const INCREASE_INGREDIENT = "INCREASE_INGREDIENT";
export const DECREASE_INGREDIENT = "DECREASE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const ADD_INGREDIENTS_BUN = "ADD_INGREDIENTS_BUN";
export const ADD_INGREDIENTS_FILLINGS = "ADD_INGREDIENTS_FILLINGS";
export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILED = "CREATE_ORDER_FAILED";

export const ADD_CURRENT_ITEM = "ADD_CURRENT_ITEM";

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

export const addOrder = (ingredients) => {
  return function (dispatch) {
    dispatch({
      type: CREATE_ORDER_REQUEST,
    });
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients }),
    })
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
            type: CREATE_ORDER_SUCCESS,
            data: res.order,
          });
        } else {
          dispatch({
            type: CREATE_ORDER_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: CREATE_ORDER_FAILED,
        });
      });
  };
};

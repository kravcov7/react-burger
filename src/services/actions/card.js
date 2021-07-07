import url from "../../utils/config";
import { getCookie } from "../../utils/cookie";

import { INCREASE_INGREDIENT, DECREASE_INGREDIENT, DELETE_ITEM, MOVE_ITEM, 
  GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, 
  ADD_INGREDIENTS_BUN, ADD_INGREDIENTS_FILLINGS, CREATE_ORDER_FAILED, 
  CREATE_ORDER_SUCCESS, CREATE_ORDER_REQUEST } from "../constants/card";

export const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });    
    fetch(`${url}/ingredients`)
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
    fetch(`${url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + getCookie('token')
      },
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

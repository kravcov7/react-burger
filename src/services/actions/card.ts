import { TOrder, TProduct } from "../../types";
import url from "../../utils/config";
import { getCookie } from "../../utils/cookie";

import { INCREASE_INGREDIENT, DECREASE_INGREDIENT, DELETE_ITEM, MOVE_ITEM, 
   GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED, 
  ADD_INGREDIENTS_BUN, ADD_INGREDIENTS_FILLINGS, CREATE_ORDER_FAILED, 
  CREATE_ORDER_SUCCESS, CREATE_ORDER_REQUEST } from "../constants/card";

  import { AppDispatch, AppThunk } from '../../types';
  

export interface IIncreaseIngredientAction {
  readonly type: typeof INCREASE_INGREDIENT;
  readonly item: TProduct;
}
export interface IDecreaseIngredientAction {
  readonly type: typeof DECREASE_INGREDIENT;
  readonly key: string;
  readonly typeItem: string
}
export interface IDeleteItemAction {
  readonly type: typeof DELETE_ITEM;
  readonly id: string;
}
export interface IMoveItemAction {
  readonly type: typeof MOVE_ITEM;
  readonly toIndex: number;
  readonly fromIndex: number;
 
}
export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly data: Array<TProduct>
}
export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IAddIngredientsBunAction {
  readonly type: typeof ADD_INGREDIENTS_BUN;
  readonly item: TProduct
}
export interface IAddIngredientsFillingsAction {
  readonly type: typeof ADD_INGREDIENTS_FILLINGS;
  readonly item: TProduct
}
export interface ICreateOrderFailedAction {
  readonly type: typeof CREATE_ORDER_FAILED;
}
export interface ICreateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  readonly data: TOrder;
}
export interface ICreateOrderRequestAction {
  readonly type: typeof CREATE_ORDER_REQUEST;
}

export type TCardsActions =
  | IIncreaseIngredientAction
  | IDecreaseIngredientAction
  | IDeleteItemAction
  | IMoveItemAction
  | IGetIngredientsRequestAction
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IAddIngredientsBunAction
  | IAddIngredientsFillingsAction
  | ICreateOrderFailedAction
  | ICreateOrderSuccessAction
  | ICreateOrderRequestAction

export const getIngredients: AppThunk = () => {
  return function (dispatch: AppDispatch) {
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

export const addOrder: AppThunk = (ingredients) => {
  return function (dispatch: AppDispatch) {
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

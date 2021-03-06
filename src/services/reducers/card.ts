import { v4 as uuidv4 } from "uuid";
import { TOrder, TProduct } from "../../types";
import { TCardsActions } from "../actions/card";

import { INCREASE_INGREDIENT, DECREASE_INGREDIENT, DELETE_ITEM, MOVE_ITEM, 
  GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, 
  ADD_INGREDIENTS_BUN, ADD_INGREDIENTS_FILLINGS, CREATE_ORDER_FAILED, 
  CREATE_ORDER_SUCCESS, CREATE_ORDER_REQUEST } from "../constants/card";

export type TCardInitialState = {
  isLoading: boolean;
  hasError: boolean;
  dataReceived: boolean;
  data: Array<TProduct>,
  burger: {
    bun: null | TProduct,
    fillings: Array<TProduct>,
  },
  counts: {[ name: string]: number},  
  currentOrder: TOrder | null;
  orderIsLoading: boolean;
  orderHasError: boolean;
};
const initialState: TCardInitialState = {
  isLoading: false,
  hasError: false,
  dataReceived: false,
  data: [],
  burger: {
    bun: null,
    fillings: [],
  },
  counts: {},  
  currentOrder: null,
  orderIsLoading: false,
  orderHasError: false,
};

export const cardReducer = (state = initialState, action: TCardsActions): TCardInitialState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, hasError: false, data: action.data, isLoading: false, dataReceived: true, };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, hasError: true, isLoading: false };
    }
    case CREATE_ORDER_REQUEST: {
      return {
        ...state,
        orderIsLoading: true,
        orderHasError: false,
      };
    }
    case CREATE_ORDER_SUCCESS: {
            
      return { ...state, orderHasError: false, currentOrder: action.data, orderIsLoading: false };
    }
    case CREATE_ORDER_FAILED: {
      return { ...state, orderHasError: true, orderIsLoading: false };
    }

    // case ADD_CURRENT_ITEM: {
    //   return { ...state, currentItem: action.item };
    // }
    case INCREASE_INGREDIENT: {
      if (action.item.type === "bun") {
        return state;
      } else {
        return {
          ...state,
          counts: { ...state.counts, [action.item._id]: (state.counts[action.item._id] || 0) + 1 },
        };
      }
    }
    case DECREASE_INGREDIENT: {
      const { typeItem } = action;
      if (typeItem !== "bun") {
        return {
          ...state,
          counts: {
            ...state.counts,
            [action.key]: state.counts[action.key] - 1,
          },
        };
      } else return state;
    }
    case DELETE_ITEM: {
      return {
        ...state,
        burger: {
          ...state.burger,
          fillings: [...state.burger.fillings].filter((el) => el.productId !== action.id),
        },
      };
    }
    case MOVE_ITEM: {
      const fillings = [...state.burger.fillings];
      fillings.splice(action.toIndex, 0, fillings.splice(action.fromIndex, 1)[0]);
      return {
        ...state,
        burger: {
          ...state.burger,
          fillings: fillings,
        },
      };
    }
    case ADD_INGREDIENTS_BUN: {
      return {
        ...state,
        burger: {
          ...state.burger,
          bun: action.item,
        },
      };
    }
    case ADD_INGREDIENTS_FILLINGS: {
      const element = { ...action.item, productId: uuidv4() };
      return {
        ...state,
        burger: {
          ...state.burger,
          fillings: [...state.burger.fillings, element],
        },
      };
    }
    default: {
      return state;
    }
  }
};

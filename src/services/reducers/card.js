import { v4 as uuidv4 } from "uuid";

import {
  INCREASE_INGREDIENT,
  DECREASE_INGREDIENT,
  DELETE_ITEM,
  MOVE_ITEM,
  // TAB_SWITCH,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  ADD_INGREDIENTS_BUN,
  ADD_INGREDIENTS_FILLINGS,
  ADD_CURRENT_ITEM,
  CREATE_ORDER_FAILED,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_REQUEST,
} from "../actions/card";

const initialState = {
  isLoading: false,
  hasError: false,
  data: [],
  burger: {
    bun: null,
    fillings: [],
  },
  counts: {},
  currentItem: null,
  currentOrder: null,
  orderIsLoading: false,
  orderHasError: false,
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
    case CREATE_ORDER_REQUEST: {
      return {
        ...state,
        orderIsLoading: true,
        orderHasError: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, hasError: false, data: action.data, isLoading: false };
    }
    case CREATE_ORDER_SUCCESS: {
      return { ...state, orderHasError: false, currentOrder: action.data, orderIsLoading: false };
    }

    case ADD_CURRENT_ITEM: {
      return { ...state, currentItem: action.item };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, hasError: true, isLoading: false };
    }
    case CREATE_ORDER_FAILED: {
      return { ...state, orderHasError: true, orderIsLoading: false };
    }
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
    // case DECREASE_INGREDIENT: {
    //   if(action.item.type === 'bun') {return state}
    //   else { return {
    //     ...state,
    //     counts: { ...state.counts,
    //       [action.item._id]:(state.counts[action.item._id] || 0) -1}
    //   }}
    // }
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
          fillings: fillings
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

    // case GET_RECOMMENDED_ITEMS_SUCCESS: {
    //   return {
    //     ...state,
    //     recommendedItemsFailed: false,
    //     recommendedItems: action.items,
    //     recommendedItemsRequest: false
    //   };
    // }
    // case GET_RECOMMENDED_ITEMS_FAILED: {
    //   return { ...state, recommendedItemsFailed: true, recommendedItemsRequest: false };
    // }
    // case INCREASE_ITEM: {
    //   return {
    //     ...state,
    //     items: [...state.items].map(item =>
    //       item.id === action.id ? { ...item, qty: ++item.qty } : item
    //     )
    //   };
    // }

    // case DELETE_ITEM: {
    //   return { ...state, items: [...state.items].filter(item => item.id !== action.id) };
    // }
    // case APPLY_PROMO_FAILED: {
    //   return {
    //     ...state,
    //     promoRequest: false,
    //     promoFailed: true,
    //     promoDiscount: null,
    //     promoCode: ''
    //   };
    // }
    // case APPLY_PROMO_REQUEST: {
    //   return {
    //     ...state,
    //     promoFailed: false,
    //     promoRequest: true
    //   };
    // }
    // case APPLY_PROMO_SUCCESS: {
    //   return {
    //     ...state,
    //     promoRequest: false,
    //     promoCode: action.value.code,
    //     promoDiscount: action.value.discount
    //   };
    // }
    // case CANCEL_PROMO: {
    //   return {
    //     ...state,
    //     promoCode: '',
    //     promoDiscount: null
    //   };
    // }
    default: {
      return state;
    }
  }
};

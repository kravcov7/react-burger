import { cardReducer } from "./card";
import { INCREASE_INGREDIENT, DECREASE_INGREDIENT, DELETE_ITEM, MOVE_ITEM, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS,
   ADD_INGREDIENTS_BUN, ADD_INGREDIENTS_FILLINGS, ADD_CURRENT_ITEM, CREATE_ORDER_FAILED, CREATE_ORDER_SUCCESS, CREATE_ORDER_REQUEST } from "../actions/card";

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

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(cardReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_INGREDIENTS_REQUEST", () => {
    expect(
      cardReducer(initialState, {
        type: GET_INGREDIENTS_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        isLoading: true,
      })
    );
  });
});

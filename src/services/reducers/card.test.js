import { cardReducer } from "./card.ts";
import { INCREASE_INGREDIENT, DECREASE_INGREDIENT, DELETE_ITEM, MOVE_ITEM, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, ADD_INGREDIENTS_BUN, ADD_INGREDIENTS_FILLINGS, CREATE_ORDER_FAILED, CREATE_ORDER_SUCCESS, CREATE_ORDER_REQUEST } from "../actions/card";

const initialState = {
  isLoading: false,
  hasError: false,
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
  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    expect(
      cardReducer(initialState, {
        type: GET_INGREDIENTS_SUCCESS,
        data: [
          {
            calories: 420,
            carbohydrates: 53,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
            image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            name: "Краторная булка N-200i",
            price: 1255,
            proteins: 80,
            type: "bun",
            _id: "60cb6564fce49c00269d4017",
          },
        ],
      })
    ).toEqual(
      expect.objectContaining({
        data: [
          {
            calories: 420,
            carbohydrates: 53,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
            image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            name: "Краторная булка N-200i",
            price: 1255,
            proteins: 80,
            type: "bun",
            _id: "60cb6564fce49c00269d4017",
          },
        ],
      })
    );
  });
  it("should handle GET_INGREDIENTS_FAILED", () => {
    expect(
      cardReducer(initialState, {
        type: GET_INGREDIENTS_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasError: true,
      })
    );
  });
  it("should handle CREATE_ORDER_REQUEST", () => {
    expect(
      cardReducer(initialState, {
        type: CREATE_ORDER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        orderIsLoading: true,
      })
    );
  });

  it("should handle CREATE_ORDER_SUCCESS", () => {
    expect(
      cardReducer(initialState, {
        type: CREATE_ORDER_SUCCESS,
        data: {
          number: 4345,
        },
      })
    ).toEqual(
      expect.objectContaining({
        currentOrder: {
          number: 4345,
        },
      })
    );
  });
  it("should handle CREATE_ORDER_FAILED", () => {
    expect(
      cardReducer(initialState, {
        type: CREATE_ORDER_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        orderHasError: true,
      })
    );
  });

  it("should handle INCREASE_INGREDIENT", () => {
    expect(
      cardReducer(initialState, {
        type: INCREASE_INGREDIENT,
        item: {
          _id: "60cb6564fce49c00269d4018",
          name: "Флюоресцентная булка R2-D3",
          type: "bun",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        },
      })
    ).toEqual(initialState);
    expect(
      cardReducer(initialState, {
        type: INCREASE_INGREDIENT,
        item: {
          _id: "60cb6564fce49c00269d401e",
          name: "Соус фирменный Space Sauce",
          type: "sauce",
          proteins: 50,
          fat: 22,
          carbohydrates: 11,
          calories: 14,
          price: 80,
          image: "https://code.s3.yandex.net/react/code/sauce-04.png",
          image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
          productId: "6269d256-d560-4c68-ab90-8bce2612bf3a",
        },
      })
    ).toEqual(
      expect.objectContaining({
        counts: {
          "60cb6564fce49c00269d401e": 1,
        },
      })
    );
  });

  it("should handle DECREASE_INGREDIENT", () => {
    const state = {
      isLoading: false,
      hasError: false,
      data: [],
      burger: {
        bun: null,
        fillings: [],
      },
      counts: {
        "60cb6564fce49c00269d401e": 3,
        "60cb6564fce49c00269d401d": 1,
        "60cb6564fce49c00269d401a": 4,
        "60cb6564fce49c00269d4019": 1,
      },
      currentOrder: null,
      orderIsLoading: false,
      orderHasError: false,
    };
    expect(
      cardReducer(state, {
        type: DECREASE_INGREDIENT,
        key: "60cb6564fce49c00269d4018",
        typeItem: "bun",
      })
    ).toEqual(state);
    expect(
      cardReducer(state, {
        type: DECREASE_INGREDIENT,
        key: "60cb6564fce49c00269d401e",
        typeItem: "sauce",
      }).counts["60cb6564fce49c00269d401e"]
    ).toBe(2);
  });

  it("should handle DELETE_ITEM", () => {
    const state = {
      isLoading: false,
      hasError: false,
      data: [],
      burger: {
        bun: null,
        fillings: [
          {
            _id: "60cb6564fce49c00269d401e",
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 22,
            carbohydrates: 11,
            calories: 14,
            price: 80,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            productId: "9ddef691-5f22-4094-8552-92724bee6383",
          },
          {
            _id: "60cb6564fce49c00269d401d",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            productId: "cccacd1f-f2df-420f-8321-2ae4d526ffb0",
          },
          {
            _id: "60cb6564fce49c00269d401d",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            productId: "dc4ce8a8-e19e-4728-93d7-afd74ad39dd4",
          },
          {
            _id: "60cb6564fce49c00269d401d",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            productId: "a90364e4-1435-49ea-9833-e29c38287b74",
          },
        ],
      },
      counts: {},
      currentOrder: null,
      orderIsLoading: false,
      orderHasError: false,
    };
    expect(
      cardReducer(state, {
        type: DELETE_ITEM,
        id: "a90364e4-1435-49ea-9833-e29c38287b74",
      }).burger.fillings.length
    ).toBe(3);
  });

  it("should handle MOVE_ITEM", () => {
    const state = {
      isLoading: false,
      hasError: false,
      data: [],
      burger: {
        bun: null,
        fillings: [
          {
            _id: "60cb6564fce49c00269d401e",
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 22,
            carbohydrates: 11,
            calories: 14,
            price: 80,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            productId: "9ddef691-5f22-4094-8552-92724bee6383",
          },
          {
            _id: "60cb6564fce49c00269d401d",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            productId: "cccacd1f-f2df-420f-8321-2ae4d526ffb0",
          },
          {
            _id: "60cb6564fce49c00269d401d",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            productId: "dc4ce8a8-e19e-4728-93d7-afd74ad39dd4",
          },
          {
            _id: "60cb6564fce49c00269d401d",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            productId: "a90364e4-1435-49ea-9833-e29c38287b74",
          },
        ],
      },
      counts: {},
      currentOrder: null,
      orderIsLoading: false,
      orderHasError: false,
    };
    expect(
      cardReducer(state, {
        type: MOVE_ITEM,
        toIndex: 0,
        fromIndex: 1,
      })
    ).toEqual(
      expect.objectContaining({
        burger: {
          bun: null,
          fillings: [
            {
              _id: "60cb6564fce49c00269d401d",
              name: "Соус Spicy-X",
              type: "sauce",
              proteins: 30,
              fat: 20,
              carbohydrates: 40,
              calories: 30,
              price: 90,
              image: "https://code.s3.yandex.net/react/code/sauce-02.png",
              image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
              image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
              productId: "cccacd1f-f2df-420f-8321-2ae4d526ffb0",
            },
            {
              _id: "60cb6564fce49c00269d401e",
              name: "Соус фирменный Space Sauce",
              type: "sauce",
              proteins: 50,
              fat: 22,
              carbohydrates: 11,
              calories: 14,
              price: 80,
              image: "https://code.s3.yandex.net/react/code/sauce-04.png",
              image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
              image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
              productId: "9ddef691-5f22-4094-8552-92724bee6383",
            },
            {
              _id: "60cb6564fce49c00269d401d",
              name: "Соус Spicy-X",
              type: "sauce",
              proteins: 30,
              fat: 20,
              carbohydrates: 40,
              calories: 30,
              price: 90,
              image: "https://code.s3.yandex.net/react/code/sauce-02.png",
              image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
              image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
              productId: "dc4ce8a8-e19e-4728-93d7-afd74ad39dd4",
            },
            {
              _id: "60cb6564fce49c00269d401d",
              name: "Соус Spicy-X",
              type: "sauce",
              proteins: 30,
              fat: 20,
              carbohydrates: 40,
              calories: 30,
              price: 90,
              image: "https://code.s3.yandex.net/react/code/sauce-02.png",
              image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
              image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
              productId: "a90364e4-1435-49ea-9833-e29c38287b74",
            },
          ],
        },
      })
    );
  });

  it("should handle ADD_INGREDIENTS_BUN", () => {
    const state = {
      isLoading: false,
      hasError: false,
      data: [],
      burger: {
        bun: {
          _id: "60cb6564fce49c00269d4018",
          name: "Флюоресцентная булка R2-D3",
          type: "bun",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        },
        fillings: [],
      },
      counts: {},
      currentOrder: null,
      orderIsLoading: false,
      orderHasError: false,
    };
    expect(
      cardReducer(state, {
        type: ADD_INGREDIENTS_BUN,
        item: {
          _id: "60cb6564fce49c00269d4018",
          name: "Флюоресцентная булка R2-D3",
          type: "bun",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/bun-01.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        },
      })
    ).toEqual(
      expect.objectContaining({
        burger: {
          bun: {
            _id: "60cb6564fce49c00269d4018",
            name: "Флюоресцентная булка R2-D3",
            type: "bun",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
          },
          fillings: [],
        },
      })
    );
  });

  it("should handle ADD_INGREDIENTS_FILLINGS", () => {
    const state = {
      isLoading: false,
      hasError: false,
      data: [],
      burger: {
        bun: null,
        fillings: [
          {
            _id: "60cb6564fce49c00269d401e",
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 22,
            carbohydrates: 11,
            calories: 14,
            price: 80,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            productId: "9ddef691-5f22-4094-8552-92724bee6383",
          },
          {
            _id: "60cb6564fce49c00269d401d",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            productId: "cccacd1f-f2df-420f-8321-2ae4d526ffb0",
          },
          {
            _id: "60cb6564fce49c00269d401d",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            productId: "dc4ce8a8-e19e-4728-93d7-afd74ad39dd4",
          },
          {
            _id: "60cb6564fce49c00269d401d",
            name: "Соус Spicy-X",
            type: "sauce",
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: "https://code.s3.yandex.net/react/code/sauce-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
            productId: "a90364e4-1435-49ea-9833-e29c38287b74",
          },
        ],
      },
      counts: {},
      currentOrder: null,
      orderIsLoading: false,
      orderHasError: false,
    };
    expect(
      cardReducer(state, {
        type: ADD_INGREDIENTS_FILLINGS,
        item: {
          _id: "60cb6564fce49c00269d401d",
          name: "Соус Spicy-X",
          type: "sauce",
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: "https://code.s3.yandex.net/react/code/sauce-02.png",
          image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
          productId: "a90364e4-1435-49ea-9833-e29c38287b74",
        },
      }).burger.fillings.length
    ).toBe(5);
  });
});

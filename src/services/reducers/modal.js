import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal";

const initialState = {
  isShow: false,
  content: null,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_MODAL: {
      return {
        isShow: false,
        content: null,
      };
    }

    case OPEN_MODAL: {
      return {
        isShow: true,
        content: action.content,
      };
    }

    default: {
      return state;
    }
  }
};

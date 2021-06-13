
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED } from "../actions/auth";

const initialState = {
  email: "",
  password: "",
  name: "",
  registerRequest: false,
	registerFailed: false,
};

export const authReducer = (state = initialState, action) => {
  // console.log(action.user)
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
				registerRequest: true,
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
				name: action.user.name,
        email: action.user.name,
        password: action.user.name,
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state,
				registerFailed: true,
      }
    }
    default: {
      return state;
    }
  }
};

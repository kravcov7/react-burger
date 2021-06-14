
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS, LOAD_USER_FAILED } from "../actions/auth";

const initialState = {
  email: "",
  password: "",
  name: "",
  registerRequest: false,
	registerFailed: false,
  loginRequest: false,
	loginFailed: false,
  loadUserRequest: false,
	loadUserFailed: false,
};

export const authReducer = (state = initialState, action) => {
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
        email: action.user.email,
        
      }
    }
    case REGISTER_FAILED: {
      return {
        ...state,
				registerFailed: true,
      }
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
				loginRequest: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
				loginFailed: true,
      }
    }
    case LOAD_USER_REQUEST: {
      return {
        ...state,
				loadUserRequest: true,
      }
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
				name: action.user.name, 
        email: action.user.email,
      }
    }
    case LOAD_USER_FAILED: {
      return {
        ...state,
				loadUserFailed: true,
      }
    }
    default: {
      return state;
    }
  }
};
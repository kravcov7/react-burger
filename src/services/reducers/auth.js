import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILED, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED } from "../constants/auth";

const initialState = {
  email: "",
  name: "",
  registerRequest: false,
  registerFailed: false,
  loginRequest: false,
  loginFailed: false,
  loadUserRequest: false,
  loadUserFailed: false,
  logoutRequest: false,
  logoutFailed: false,
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  isforgotPasswordRequest: false,
  isforgotPasswordSaccess: false,
  isTokenUpdated: false,
  tokenUpdateDate: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginFailed: true,
      };
    }
    case LOAD_USER_REQUEST: {
      return {
        ...state,
        loadUserRequest: true,
      };
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
      };
    }
    case LOAD_USER_FAILED: {
      return {
        ...state,
        loadUserFailed: true,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        loginFailed: true,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        name: "",
        email: "",
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutFailed: true,
      };
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isforgotPasswordRequest: true,
        isforgotPasswordSaccess: true,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordFailed: true,
        isforgotPasswordRequest: true,
      };
    }
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        isTokenUpdated: true,
        tokenUpdateDate: true,
      };
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        isTokenUpdated: true,
      };
    }
    default: {
      return state;
    }
  }
};

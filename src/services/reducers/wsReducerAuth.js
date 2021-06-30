import {
  WS_USER_NAME_UPDATE_AUTH,
  WS_CONNECTION_SUCCESS_AUTH,
  WS_CONNECTION_ERROR_AUTH,
  WS_CONNECTION_CLOSED_AUTH,
  WS_GET_MESSAGE_AUTH
} from '../actions/socketAuth';

const initialState = {
  wsConnected: false,
  messages: []
};

export const wsReducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS_AUTH:
      return {
        ...state,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR_AUTH:
      return {
        ...state,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSED_AUTH:
      return {
        ...state,
        wsConnected: false
      };

    case WS_GET_MESSAGE_AUTH:
      return {
        ...state,
        messages: action.payload,
      };
    case WS_USER_NAME_UPDATE_AUTH:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};

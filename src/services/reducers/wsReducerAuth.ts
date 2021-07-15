import { TOrder } from '../../types';
import { TWSActionsActionsAuth } from '../actions/socketAuth';
import {
  WS_CONNECTION_SUCCESS_AUTH,
  WS_CONNECTION_ERROR_AUTH,
  WS_CONNECTION_CLOSED_AUTH,
  WS_GET_MESSAGE_AUTH
} from '../constants/socketAuth';

export type TWsReducerAuthInitialState = {
  wsConnected: boolean;
  orders: Array<TOrder>;
  total: number;
  totalToday: number
};
const initialState: TWsReducerAuthInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0
};

export const wsReducerAuth = (state = initialState, action: TWSActionsActionsAuth): TWsReducerAuthInitialState => {
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
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      };
    
    default:
      return state;
  }
};

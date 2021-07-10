import { TOrder } from '../../types';
import { TWSActionsActions } from '../actions/socket';
import {
  WS_USER_NAME_UPDATE,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE
} from '../constants/socket';

export type TWsReducerInitialState = {
  wsConnected: boolean;
  orders: Array<TOrder>;
  total: number ;
  totalToday: number 
};
const initialState: TWsReducerInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0
};

export const wsReducer = (state = initialState, action: TWSActionsActions): TWsReducerInitialState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false
      };

    case WS_GET_MESSAGE:
      console.log(action.payload);
      
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

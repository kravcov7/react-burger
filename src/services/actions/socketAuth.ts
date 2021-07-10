import { PayloadAction } from '@reduxjs/toolkit';
import { TGetOrders } from '../../types';
import { 
  WS_CONNECTION_SUCCESS_AUTH,
  WS_CONNECTION_ERROR_AUTH,
  WS_CONNECTION_CLOSED_AUTH,
  WS_GET_MESSAGE_AUTH,
  WS_CONNECTION_START_AUTH
} from '../constants/socketAuth';

export const wsActionsAuth = {
  wsInit: WS_CONNECTION_START_AUTH,  
  onOpen: WS_CONNECTION_SUCCESS_AUTH,
  onClose: WS_CONNECTION_CLOSED_AUTH,
  onError: WS_CONNECTION_ERROR_AUTH,
  onMessage: WS_GET_MESSAGE_AUTH
};

export interface IWsConnectionSuccesshAuthAction {
	readonly type: typeof WS_CONNECTION_SUCCESS_AUTH;
  readonly payload: PayloadAction;
}
export interface IWsConnectionErrorAuthAction {
	readonly type: typeof WS_CONNECTION_ERROR_AUTH;
  readonly payload: PayloadAction;
}
export interface IWsConnectionClosedAuthAction {
	readonly type: typeof WS_CONNECTION_CLOSED_AUTH;
  readonly payload: PayloadAction;
}
export interface IWsGetMessageAuthAction {
	readonly type: typeof WS_GET_MESSAGE_AUTH;
  readonly payload: TGetOrders;
}
export interface IWsConnectionStartAuthAction {
	readonly type: typeof WS_CONNECTION_START_AUTH;
}

export type TWSActionsActionsAuth =	
	| IWsConnectionSuccesshAuthAction
	| IWsConnectionErrorAuthAction
	| IWsConnectionClosedAuthAction
	| IWsGetMessageAuthAction
  | IWsConnectionStartAuthAction

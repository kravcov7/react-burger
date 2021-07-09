import { PayloadAction } from '@reduxjs/toolkit';
import { TGetOrders } from '../../types';
import {  
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
	WS_CONNECTION_START
} from '../constants/socket';

export const wsActions = {
	wsInit: WS_CONNECTION_START,	
	onOpen: WS_CONNECTION_SUCCESS,
	onClose: WS_CONNECTION_CLOSED,
	onError: WS_CONNECTION_ERROR,
	onMessage: WS_GET_MESSAGE
};

export interface IWsConnectionSuccesshAction {
	readonly type: typeof WS_CONNECTION_SUCCESS;
	readonly payload: PayloadAction;
}
export interface IWsConnectionErrorAction {
	readonly type: typeof WS_CONNECTION_ERROR;
	readonly payload: PayloadAction;
}
export interface IWsConnectionClosedAction {
	readonly type: typeof WS_CONNECTION_CLOSED;
	
}
export interface IWsGetMessageAction {
	readonly type: typeof WS_GET_MESSAGE;
	readonly payload: TGetOrders;
}
export interface IWsConnectionStartAction {
	readonly type: typeof WS_CONNECTION_START;
}

export type TWSActionsActions =	
	| IWsConnectionSuccesshAction
	| IWsConnectionErrorAction
	| IWsConnectionClosedAction
	| IWsGetMessageAction
	| IWsConnectionStartAction

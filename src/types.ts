import { TAuthActions } from "./services/actions/auth";
import { TCardsActions } from "./services/actions/card";
import { TWSActionsActions } from "./services/actions/socket";
import { TWSActionsActionsAuth } from "./services/actions/socketAuth";
import { store } from './store';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type TProduct = {
  calories: number;
		carbohydrates: number;
		fat: number;
		image_large: string;
		image: string;
		image_mobile: string;
		name: string;
		price: number;	
		proteins: number;
		type: string;
		__v: number;
   productId?: string;
		_id: string
}

export type TOwner = {
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

export type TOrder = {
  status: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  _id:string;
  number:number;
  ingredients: Array<string>;
	price: number;
	owner: TOwner;
}

export type TUser = {
	name: string;
	email: string;
	password?: string;	
}

export type TLocationTemplate = {
	background?: any;
}

type TApplicationActions = TAuthActions | TCardsActions | TWSActionsActionsAuth | TWSActionsActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;

export type TWSAction = {
  wsInit: string,  
  onOpen: string,
  onClose: string,
  onError: string,
  onMessage: string
}


export type TGetOrders = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
}
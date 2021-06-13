import { combineReducers } from 'redux';
import { cardReducer } from './card';
import { modalReducer } from './modal';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  modal: modalReducer,
  card: cardReducer,
  auth: authReducer,
});

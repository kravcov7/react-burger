import { combineReducers } from 'redux';
import { cardReducer } from './card';

export const rootReducer = combineReducers({
  
  card: cardReducer,
});

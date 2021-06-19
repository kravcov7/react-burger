import { combineReducers } from 'redux';
import { cardReducer } from './card';
// import { modalReducer } from './modal';
import { authReducer } from './auth';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  // modal: modalReducer,
  card: cardReducer,
  auth: authReducer,
  router: connectRouter(history),
});


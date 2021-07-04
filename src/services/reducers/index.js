import { combineReducers } from 'redux';
import { cardReducer } from './card';
import { authReducer } from './auth';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { wsReducer } from './wsReducer';
import { wsReducerAuth } from './wsReducerAuth';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  card: cardReducer,
  auth: authReducer,
  router: connectRouter(history),
  ws: wsReducer,
  wsAuth: wsReducerAuth
});


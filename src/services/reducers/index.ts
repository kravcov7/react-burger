import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { wsReducer } from './wsReducer';
import { wsReducerAuth } from './wsReducerAuth';
import { cardReducer } from './card';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  card: cardReducer,
  auth: authReducer,
  router: connectRouter(history),
  ws: wsReducer,
  wsAuth: wsReducerAuth
});


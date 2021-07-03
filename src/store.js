import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer, history } from './services/reducers';
import { socketMiddleware } from './services/middleware';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { wsActions } from './services/actions/socket';
import { wsActionsAuth } from './services/actions/socketAuth';
const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
const wsUrlAuth = 'wss://norma.nomoreparties.space/orders';

const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history), socketMiddleware(wsUrl, wsActions, false), socketMiddleware(wsUrlAuth, wsActionsAuth, true))
);

export const store = createStore(rootReducer, enhancer);

// import {socketMiddleware} from './services/middlewares/socketMiddleware';


import { getCookie } from '../../utils/cookie'

import { AnyAction, MiddlewareAPI } from 'redux';
import { TWSAction } from '../../types';


export const socketMiddleware = (wsUrl: string, wsActions: TWSAction, isAuth: boolean) => ( store: MiddlewareAPI) =>{
  
    let socket: WebSocket | null = null;

    return(next: (i: AnyAction) => void) => (action: AnyAction) => {
      // const { dispatch, getState } = store;
      const { dispatch } = store;
      const { type } = action;
      // const { type, payload } = action;
      // const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
      // const { user } = getState().user;
      const token = isAuth ? getCookie('token') : null;
      if (type === wsInit) {
				socket = token
					? new WebSocket(`${wsUrl}?token=${token}`)
					: new WebSocket(`${wsUrl}`);
			}
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        // if (type === wsSendMessage) {
        //   const message = { ...payload, token: user.token };
        //   socket.send(JSON.stringify(message));
        // }
      }

      next(action);
    
  };
};

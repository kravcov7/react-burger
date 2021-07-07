import {  setCookie, deleteCookie } from "../../utils/cookie";
import {  getUser, signUp, signIn, forgotPasswordR, updateUserCookie, signOutCookie, refreshTokenR } from "../../utils/api";
import { push } from 'connected-react-router';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, 
	LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILED, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, 
	LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILED, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, 
	REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_FAILED } from "../constants/auth";


export interface IRegisterRequestAction {
  readonly type: typeof REGISTER_REQUEST;
}
export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
	readonly user: any
}
export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
}
export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
}
export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}
export interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
}
export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
}
export interface ILogoutRequestAction {
	readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccessAction {
	readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILogoutFailedAction {
	readonly type: typeof LOGOUT_FAILED;
}
export interface IForgotPasswordRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}
export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}
export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}
export interface IRefreshTokenRequestAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}
export interface IRefreshTokenSuccessAction {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
}
export interface IRefreshTokenFailedAction {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}

export function register(newUser) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    signUp(newUser)
      .then((res) => {
        
        if (res && res.success) {
          const accessToken = res.accessToken.split("Bearer ")[1];
          const refreshToken = res.refreshToken;
          setCookie("token", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          dispatch({
            type: REGISTER_SUCCESS,
            user: res.user,
          });
					dispatch(push('/'));
        } else
          dispatch({
            type: REGISTER_FAILED,
          });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILED,
          error: err.message,
        });
      });
  };
}

export const login = (state) => {
	return function (dispatch) {
		dispatch({
			type: LOGIN_REQUEST
		})
		signIn(state)
			.then((res) => {
				if (res && res.success) {
					const accessToken = res.accessToken.split('Bearer ')[1];
					const refreshToken = res.refreshToken;
					setCookie('token', accessToken);
					localStorage.setItem('refreshToken', refreshToken);
					dispatch({
						type: LOGIN_SUCCESS,
						user: res.user
					});
				} else {
					dispatch({
						type: LOGIN_FAILED
					});
				}
			}).catch(err => {
				console.log(err)
				dispatch({
					type: LOGIN_FAILED
				})
			})
	};
}

export const forgotPassword = (email) => {
	return function (dispatch) {
		dispatch({
			type: FORGOT_PASSWORD_REQUEST
		})
		forgotPasswordR(email)
		.then((res) => {
			dispatch({
				type: FORGOT_PASSWORD_SUCCESS,
			});
			dispatch(push('/reset-password'));
		}).catch(err => {
				console.log(err)
				dispatch({
					type: FORGOT_PASSWORD_FAILED
				})
			})
	};
}

export const loadUser = () => {
	return function (dispatch) {
		dispatch({
			type: LOAD_USER_REQUEST
		})
		getUser().then((res) => {
			if (res && res.success) {
				console.log(res);
				dispatch({
					type: LOAD_USER_SUCCESS,
					user: res.user
				});
			} else {
				throw res;
			}
		}).catch(err => {
      console.log(err)
      dispatch({
        type: LOAD_USER_FAILED
      })
		})
	};
}

export const updateUser = (data) => {
	return function (dispatch) {
		dispatch({
			type: UPDATE_USER_REQUEST
		})
		updateUserCookie(data).then((res) => {
			if (res && res.success) {
				dispatch({
					type: UPDATE_USER_SUCCESS,
					user: res.user
				});
			} else {
				throw res;
			}
		}).catch(err => {
      console.log(err)
      dispatch({
        type: UPDATE_USER_FAILED
      })
		})
	};
}

export const logOut = () => {
	return function (dispatch) {
		dispatch({
			type: LOGOUT_REQUEST
		})
		signOutCookie()
			.then((res) => {
				if (res && res.success) {
					deleteCookie('token');
					localStorage.removeItem('refreshToken')
					dispatch({
						type: LOGOUT_SUCCESS
					});
				} else {
					dispatch({
						type: LOGOUT_FAILED
					});
				}
			}).catch(err => {
				dispatch({
					type: LOGOUT_FAILED
				})
			})
	};
}

export const refreshToken = () => {
	return function (dispatch) {
		dispatch({
			type: REFRESH_TOKEN_REQUEST,
		});
		refreshTokenR().then((res) => {
			if (res && res.success) {
				localStorage.setItem('refreshToken', res.refreshToken);
				const authToken = res.accessToken.split('Bearer ')[1];
				setCookie('token', authToken);
				dispatch({
					type: REFRESH_TOKEN_SUCCESS,
				});
			} else {
				dispatch({
					type: REFRESH_TOKEN_FAILED,
				});
			}
		})
	};
}

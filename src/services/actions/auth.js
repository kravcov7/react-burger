import {  setCookie, deleteCookie } from "../../utils/cookie";
import {  getUser, signUp, signIn, forgotPasswordR, updateUserCookie, signOutCookie, refreshTokenR } from "../../utils/api";
import { push } from 'connected-react-router';
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILED = "LOAD_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

export function register(newUser) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    signUp(newUser)
      .then((res) => {
        console.log(res);
        if (res && res.success) {
          const accessToken = res.accessToken.split("Bearer ")[1];
          const refreshToken = res.refreshToken;
          setCookie("token", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          dispatch({
            type: REGISTER_SUCCESS,
            user: res.user,
          });
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

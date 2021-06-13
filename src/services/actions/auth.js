import { deleteCookie, setCookie } from "../../utils/cookie";
import { loginRequest, getUserRequest, logoutRequest, signUp } from "../../utils/api";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export function register(newUser) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST,
    });
    signUp(newUser)
      .then((res) => {
        console.log(res);
        if (res && res.success) {
          const accessToken = res.accessToken.split("Bearer")[1];
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

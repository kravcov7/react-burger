import url from "../../utils/config";

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

import { useState } from "react";
import { deleteCookie, setCookie } from "./utils";

import { loginRequest, getUserRequest, logoutRequest } from "./api";

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    return await getUserRequest()
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser({ ...data.user, id: data.user._id });
        }
        return data.success;
      });
  };

  const getUser = () => {
    return function (dispatch) {
      dispatch({
        type: GET_USERS_REQUEST,
      });
      fetch(`${url}/token`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`ошибка: ` + res.status);
          } else {
            return res.json();
          }
        })
        .then((res) => {
          if (res && res.success) {
            dispatch({
              type: GET_USERS_SUCCESS,
              data: res.data,
            });
          } else {
            dispatch({
              type: GET_USERS_FAILED,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: GET_USERS_FAILED,
          });
        });
    };
  };

  const signIn = async (form) => {
    const data = await loginRequest(form)
      .then((res) => {
        let authToken;
        res.headers.forEach((header) => {
          if (header.indexOf("Bearer") === 0) {
            authToken = header.split("Bearer ")[1];
          }
        });
        if (authToken) {
          setCookie("token", authToken);
        }
        return res.json();
      })
      .then((data) => data);

    if (data.success) {
      setUser({ ...data.user, id: data.user._id });
    }
  };

  const signOut = async () => {
    await logoutRequest();
    setUser(null);
    deleteCookie("token");
  };

  return {
    user,
    getUser,
    signIn,
    signOut,
  };
}

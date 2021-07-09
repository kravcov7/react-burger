import { TOrder } from "../types";
import url from "./config";
import { setCookie, getCookie, deleteCookie } from "./cookie";

type TPropsResetPassword = {token: string; password: string }

export const resetPassword = ({ token, password }: TPropsResetPassword) => {
  fetch(`${url}/password-reset/reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, password }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`ошибка: ` + res.status);
      } else {
        return res.json();
      }
    })
    .then((res) => requestHandler(res));
};

type TPropsRegister = {name: string; password: string; email: string }

export const register = ({ name, password, email }: TPropsRegister) => {
  fetch(`${url}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password, email }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`ошибка: ` + res.status);
      } else {
        return res.json();
      }
    })
    .then((res) => requestHandler(res));
};

type TPropsLogin = Omit<TPropsRegister, 'email'> 

export const login = ({ name, password }: TPropsLogin) => {
  fetch(`${url}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`ошибка: ` + res.status);
      } else {
        return res.json();
      }
    })
    .then((res) => requestHandler(res));
};

export const forgot = (email: string) => {
  fetch(`${url}/password-reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`ошибка: ` + res.status);
      } else {
        return res.json();
      }
    })
    .then((res) => requestHandler(res));
};

export const signUp = ({ email, password, name }: TPropsRegister) => {
  return fetch(`${url}/auth/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
    
  .then((res) => requestHandler(res))
};

export const signIn = ({ name, password }: TPropsLogin) => {
  return fetch(`${url}/auth/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: name, password }),
  })
  .then((res) => requestHandler(res));
};

export const forgotPasswordR = (value: string) => {
  return fetch(`${url}/password-reset`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: value }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then((res) => requestHandler(res));
};


const requestHandler = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(res)
};

export const refreshTokenR = () => {
  return fetch(`${url}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then(requestHandler);
};

type TFetchWithRefresh = { success: boolean; message: string }

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
  try {    
    const res = await fetch(url, options)
    return await requestHandler(res)
  } catch(err) {
    return err.json()
    .then((err: TFetchWithRefresh) => {
      console.log(err)
      if (err?.message === 'jwt expired') {
        return refreshTokenR()
          .then(res => {
            localStorage.setItem('refreshToken', res.refreshToken)
            const authToken = res.accessToken.split('Bearer ')[1];
            setCookie('token', authToken);
            (options.headers as { [key: string]: string }).Authorization = res.accessToken
            return fetch(url, options).then((res) => requestHandler(res))
          })
      } else {
        deleteCookie('token');
        localStorage.removeItem('refreshToken');
        // eslint-disable-next-line
        location.reload()
        return Promise.reject(err)
      }
    })
}
}


export const getUser = () => {
  return fetchWithRefresh(`${url}/auth/user`, {    
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { 
      "Content-Type": "application/json",
      Authorization: 'Bearer ' + getCookie('token') },    
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
}

export const updateUserCookie = (data: TPropsRegister ) => {
  console.log(getCookie('token'));
	return fetch(`${url}/auth/user`, {
		method: 'PATCH',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			"Content-Type": "application/json",
			Authorization: 'Bearer ' + getCookie('token')
		},
		body: JSON.stringify(data),
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	})
	.then((res) => requestHandler(res))
}

export const signOutCookie = () => {
	return fetch(`${url}/auth/logout`, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(
			{ token: localStorage.getItem('refreshToken') }
		),
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	})
		.then((res) => requestHandler(res))
}

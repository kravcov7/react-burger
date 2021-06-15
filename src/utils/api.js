import url from "./config";
import { setCookie, getCookie } from "./cookie";

export const resetPassword = ({ token, password }) => {
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

export const register = ({ name, password, email }) => {
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

export const login = ({ name, password }) => {
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

export const forgot = (email) => {
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

export const signUp = ({ email, password, name }) => {
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

export const signIn = ({ name, password }) => {
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

export const forgotPasswordR = (value) => {
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

const requestHandler = (res) => {
  if (res.ok) return res.json();
  if (res.json) return res.json().then((err) => Promise.reject(err));
  return Promise.reject(res);
};

export const refreshTokenR = () => {
  return fetch(`${url}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then(requestHandler);
};

export const fetchWithRefresh = async (url, options) => {
  console.log(options);
  try {
    
    const res = await fetch(url, options)
    return await requestHandler(res)
  } catch(err) {
    console.log(err.message);
    if (err.message === 'jwt expired'){
      const refreshData = await refreshTokenR();
      localStorage.setItem('refreshToken', refreshData.refreshToken);
      const accessToken = refreshData.accessToken.split("Bearer ")[1];
      setCookie('token', accessToken)
      options.headers.authorization = refreshData.refreshToken;
      const res = await fetch(url, options)
      return await requestHandler(res)
    } else {
      return Promise.reject(err)
    }
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

export const updateUserCookie = (data) => {
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
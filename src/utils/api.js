import url from "./config";

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
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
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
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
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
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
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
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const signUp = ({ email, password, name }) => {

	return fetch(`${url}/auth/register`, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(
			{ email, password, name }
		),
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	})
  .then((res) => console.log('res - ', res))
  .catch((err) => console.log('err - ', err));
  // .then((res) => requestHandler(res))
}

const requestHandler = (res) => {
	if (res.ok) return res.json()
	if (res.json) return res.json().then((err) => Promise.reject(err))
	return Promise.reject(res)
}
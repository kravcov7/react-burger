import React, { useState } from "react";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Link } from 'react-router-dom';

import s from "./reset-password.module.css";

function ResetPassword() {
  const [state, setState] = useState({
    password: "",
    token: "",
  });

  const reset = ({ token, password }) => {
    fetch("https://norma.nomoreparties.space/api/password-reset/reset", {
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

  const handleInputChange = (event) => {
    const target = event.target;
    // Определяем, откуда пришло событие: из чекбокса или текстового поля ввода
    const value = target.value;
    const name = target.name;

    // Применяем вычисляемые имена свойств
    setState({
      ...state,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
    reset(state);
  };

  return (
    <section className={cn(s.main, "mt-30")}>
      <form onSubmit={submit} className={s.form}>
        <h1 className="text text_type_main-large mb-6">Восстановление пароля</h1>
        <PasswordInput value={state.password} name={"password"} onChange={handleInputChange} />
        <Input type={"text"} placeholder={"Введите код из письма"} onChange={handleInputChange} value={state.token} name={"token"} error={false} errorText={"Ошибка"} size={"default"} />
        <Button type="primary" size="large" className="mt-6">
          Сохранить
        </Button>
      </form>
      {/* <div>
				<span className={'text text_type_main-default text_color_inactive'}>Вы - новый пользователь?</span>
				<Button type="secondary" size="medium" className='p-0'>
					Зарегистрироваться
				</Button>
			</div> */}
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль?
        <Link to='/login'  type="secondary" className={cn(s.link, 'ml-2')}>
          Войти
        </Link>
      </p>
    </section>
  );
}

export default ResetPassword;

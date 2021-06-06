import React, { useState } from "react";
import { EmailInput, Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import {Link} from 'react-router-dom';

import s from "./register.module.css";

function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = ({ name, password, email }) => {
    fetch("https://norma.nomoreparties.space/api/auth/register", {
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
    register(state);
  };
  return (
    <section className={cn(s.main, "mt-30")}>
      <form onSubmit={submit} className={s.form}>
        <h1 className="text text_type_main-large mb-6">Регистрация</h1>
        <Input type={"text"} placeholder={"Имя"} onChange={handleInputChange} value={state.name} name={"name"} error={false} errorText={"Ошибка"} size={"default"} />
        <Input type={"email"} placeholder={"E-mail"} onChange={handleInputChange} value={state.email} name={"email"} error={false} errorText={"Ошибка"} size={"default"} />
        <PasswordInput onChange={handleInputChange} value={state.password} name={"password"} />
        <Button type="primary" size="large" className="mt-6">
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Уже зарегистрированы?<Link to="/login"  type="secondary" className={cn(s.link, 'ml-2')}>Войти</Link>
      </p>
    </section>
  );
}

export default Register;

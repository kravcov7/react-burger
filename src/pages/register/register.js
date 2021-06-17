import React, { useState } from "react";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Link } from "react-router-dom";
import { register } from "../../services/actions/auth";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import s from "./register.module.css";

function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(register(state));
  };
  
  const hasToken = localStorage.getItem('refreshToken')
  console.log(hasToken);
  if (hasToken) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );
  }
  
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
        Уже зарегистрированы?
        <Link to="/login" type="secondary" className={cn(s.link, "ml-2")}>
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;

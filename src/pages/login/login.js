import { useState } from "react";
import { PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Link } from "react-router-dom";
import { login } from "../../services/actions/auth";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import s from "./login.module.css";

function Login() {
  const [state, setState] = useState({
    name: "",
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
    dispatch(login(state));
  };

  const hasToken = localStorage.getItem('refreshToken')
  const user = useSelector(store => store.auth.name)

  if (user || hasToken) {
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
        <h1 className="text text_type_main-large mb-6">Вход</h1>
        <Input type={"email"} placeholder={"E-mail"} onChange={handleInputChange} value={state.name} name={"name"} error={false} errorText={"Ошибка"} size={"default"} />
        <PasswordInput onChange={handleInputChange} value={state.password} name={"password"} />
        <Button type="primary" size="large" className="mt-6">
          Войти
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вы - новый пользователь?
        <Link to="/register" type="secondary" className={cn(s.link, "ml-2")}>
          Зарегестрироваться
        </Link>{" "}
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        Забыли пароль?
        <Link to="/forgot-password" type="secondary" className={cn(s.link, "ml-2")}>
          Восстановить пароль
        </Link>
      </p>
    </section>
  );
}

export default Login;

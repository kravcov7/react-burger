import {SyntheticEvent, useState} from 'react';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/actions/auth";
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import s from "./forgot-password.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  const hasToken = localStorage.getItem('refreshToken');
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
      <form onSubmit={submit}  className={s.form}>
        <h1 className="text text_type_main-large mb-6">Восстановление пароля</h1>
        <Input type={"email"} placeholder={"Укажите e-mail"} value={email} onChange={(event) => setEmail(event.target.value)} />
        <Button type="primary" size="large" >
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль?
        <Link to="/login" type="secondary" className={cn(s.link, "ml-2")}>
          Войти
        </Link>
      </p>
    </section>
  );
}

export default ForgotPassword;

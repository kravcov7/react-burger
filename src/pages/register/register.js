import React from "react";
import { EmailInput, Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import {Link} from 'react-router-dom';

import s from "./register.module.css";

function Register() {
  return (
    <section className={cn(s.main, "mt-30")}>
      <form className={s.form}>
        <h1 className="text text_type_main-large mb-6">Регистрация</h1>
        <Input type={"text"} placeholder={"Имя"} size={"default"} />
        <EmailInput name={"E-ddddil"} className="mb-5" />
        <PasswordInput name={"password"} />
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

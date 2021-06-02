import React from "react";
// import { setConstantValue } from "typescript";
import { EmailInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./login.module.css";

function Login() {
  return (
    <section className={cn(s.main, "mt-30")}>
      <h1 className="text text_type_main-large mb-6">Вход</h1>
      <EmailInput name={"email"} className='mb-5' />
      <Input type={"text"} placeholder={"Пароль"} size={"default"} />
      <Button type="primary" size="large" className="mt-6">
        Войти
      </Button>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вы - новый пользователь? <Link className={s.link}>Зарегестрироваться</Link>{" "}
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        Забыли пароль? <Link className={s.link}>Восстановить пароль</Link>
      </p>
    </section>
  );
}

export default Login;

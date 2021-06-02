import React from "react";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Link } from "react-router-dom";

import s from "./reset-password.module.css";

function ResetPassword() {
  return (
    <section className={cn(s.main, "mt-30")}>
      <h1 className="text text_type_main-large mb-6">Восстановление пароля</h1>
      <Input type={"text"} placeholder={"Введите новый пароль"} size={"default"} />
      <Input type={"text"} placeholder={"Введите код из письма"} size={"default"} />
      <Button type="primary" size="large" className="mt-6">
        Сохранить
      </Button>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль? <Link className={s.link}>Войти</Link>{" "}
      </p>
    </section>
  );
}

export default ResetPassword;

import {useState} from 'react';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Link } from "react-router-dom";
import url from "../../utils/config";

import s from "./forgot-password.module.css";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  
  const forgot = (email) => {
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

  const submit = (e) => {
    e.preventDefault();
    console.log(email);
    forgot(email);
  };

  return (
    <section className={cn(s.main, "mt-30")}>
      <form onSubmit={submit}  className={s.form}>
        <h1 className="text text_type_main-large mb-6">Восстановление пароля</h1>
        <Input type={"email"} placeholder={"Укажите e-mail"} value={email} onChange={(event) => setEmail(event.target.value)} />
        <Button type="primary" size="large" className="mt-6">
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

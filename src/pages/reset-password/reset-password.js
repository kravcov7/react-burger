import React from "react";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";


import s from "./reset-password.module.css";

function ResetPassword() {
  return (
    <section className={cn(s.main, "mt-30")}>
      <form className={s.form}>
        <h1 className="text text_type_main-large mb-6">Восстановление пароля</h1>
        <Input type={"text"} placeholder={"Введите новый пароль"} size={"default"} />
        <Input type={"text"} placeholder={"Введите код из письма"} size={"default"} />
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
        <Button type="secondary" className={s.link}>
          Войти
        </Button>
      </p>
    </section>
  );
}

export default ResetPassword;

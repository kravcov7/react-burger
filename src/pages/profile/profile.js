import React from "react";
import { EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";

import s from "./profile.module.css";

export function Profile() {
  return (
    <section className={cn(s.main, "mt-30")}>
      <div className={s.menu}>
        <h2 className="text text_type_main-large mb-6">Регистрация</h2>
        <h2 className="text text_type_main-large mb-6">История заказов</h2>
        <h2 className="text text_type_main-large mb-6">Выход</h2>
        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы моежете ...</p>
      </div>
      <div className={s.inputs}>

        {/* <Switch>
          route
            профиль
          route
          route
            история заказов
          route
        </Switch> */}


        <Input type={"text"} placeholder={"Имя"} size={"default"} />
        <EmailInput name={"E-ddddil"} className="mb-5" />
        <PasswordInput name={"password"} />
      </div>
    </section>
  );
}

export default Profile;

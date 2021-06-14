import { EmailInput, Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../services/actions/auth'

import s from "./profile.module.css";
import ProfileOrders from "../../components/profile-orders/profile-orders";

export function Profile() {
  const dispatch = useDispatch();

	useEffect(() => {
		if(localStorage.getItem('refreshToken')) dispatch(loadUser()) 
	}, [dispatch])


  return (
    <section className={cn(s.main, "mt-30")}>
      <div className={s.menu}>
        <NavLink to="/profile" exact activeClassName={s.active} className={cn(s.link, "text text_type_main-large mb-6")}>
          Профиль
        </NavLink>
        <NavLink to="/profile/orders" exact activeClassName={s.active} className={cn(s.link, "text text_type_main-large mb-6")}>
          История заказов
        </NavLink>
        <NavLink to="" exact activeClassName={s.active} className={cn(s.link, "text text_type_main-large mb-6")}>
          Выход
        </NavLink>

        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы моежете изменить свои персональные данные</p>
      </div>
      <div className={cn(s.inputs, "ml-15")}>
        <Switch>
          <Route path="/profile" exact>
            <Input type={"text"} placeholder={"Имя"} size={"default"} />
            <EmailInput name={"E-ddddil"} className="mb-5" />
            <PasswordInput name={"password"} />
            <div className={s.button}>
              <Button type="secondary" size="large" className="mt-6">
                Отмена
              </Button>
              <Button type="primary" size="large" className="mt-6">
                Сохранить
              </Button>
            </div>
          </Route>
          <Route path="/profile/orders" exact>
            <ProfileOrders />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Profile;

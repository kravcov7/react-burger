import { Link } from "react-router-dom";
import { EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import s from "./profile.module.css";
import Burger from "../../components/burger/burger";
import ProfileOrders from "../../components/profile-orders/profile-orders";

export function Profile() {
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

import React from "react";
import styles from "./app-header.module.css";
import cn from "classnames";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";

function AppHeader() {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={cn(styles.block)}>
          <NavLink exact to="/" className={cn(styles.link)} activeClassName={styles.active}>
            <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
            <span className={cn("pl-1", "mr-4", "text", "text_type_main-default")}>Конструктор</span>
          </NavLink>
          <NavLink to="/feed" className={cn(styles.link)} activeClassName={styles.active}>
            <ListIcon type={pathname === "/feed" ? "primary" : "secondary"} className={cn("ml-2")} />
            <span className={cn("pl-1", "text", "text_type_main-default")}>Лента заказов</span>
          </NavLink>
        </div>
        <Logo />
        <NavLink to="/profile" className={cn(styles.block)} activeClassName={styles.active}>
          <ProfileIcon type={pathname === "/profile" ? "primary" : "secondary"} className={cn("ml-2")} />
          <span className={cn(styles.link, "pl-1")}>Личный кабинет</span>
        </NavLink>
        {/* <div className={styles.block}>
          <ProfileIcon type="secondary" />
          <span className={cn(styles.link, "pl-1")}>Личный кабинет</span>
        </div> */}
      </nav>
    </header>
  );
}

export default AppHeader;

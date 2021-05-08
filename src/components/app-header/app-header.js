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
          <NavLink exact to="/" className={cn(styles.link, "pt-4")} activeClassName={styles.link_active}>
            <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
            <span className={cn(styles.link, styles.link_active, "pl-1", "mr-4", 'text', 'text_type_main-default')}>Конструктор</span>
          </NavLink> 
          <NavLink  to="/order" className={cn(styles.link, "pt-4")} activeClassName={styles.link_active}>
            <ListIcon  type={pathname === '/order' ? "primary" : "secondary"}  className={cn("ml-2")}  />
            <span className={cn(styles.link, "pl-1", 'text', 'text_type_main-default')}>Лента заказов</span>
          </NavLink>      
        </div>
        <Logo />
        <div className={styles.block}>
          <ProfileIcon type="secondary" />
          <span className={cn(styles.link, "pl-1")}>Личный кабинет</span>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;

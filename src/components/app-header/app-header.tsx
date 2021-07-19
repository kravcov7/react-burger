import styles from "./app-header.module.css";
import cn from "classnames";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useRouteMatch } from "react-router-dom";

function AppHeader() {
  
  const isConstructor = !!useRouteMatch({ path: '/', exact: true});
  const isFeed = !!useRouteMatch('/feed');
  const isProfile = !!useRouteMatch('/profile');

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={cn(styles.block)}>
          <NavLink exact to="/react-burger/" className={cn(styles.link)} activeClassName={styles.active}>
            <BurgerIcon type={isConstructor  ? "primary" : "secondary"} />
            <span className={cn("pl-1", "mr-4", "text", "text_type_main-default")}>Конструктор</span>
          </NavLink>
          <NavLink to="/feed" className={cn(styles.link)} activeClassName={styles.active}>
            <ListIcon type={isFeed ? "primary" : "secondary"}  />
            <span className={cn("pl-1", "text", "text_type_main-default")}>Лента заказов</span>
          </NavLink>
        </div>
        <Logo />
        <NavLink to="/profile" className={cn(styles.link)} activeClassName={styles.active}>
          <ProfileIcon type={isProfile ? "primary" : "secondary"} />
          <span className={cn("text", "text_type_main-default", "pl-1")}>Личный кабинет</span>
        </NavLink>        
      </nav>
    </header>
  );
}

export default AppHeader;

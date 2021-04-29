import react from "react";
import styles from "./AppHeader.module.css";
import cn from "classnames";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={cn(styles.block)}>
          {/* <div >
            <BurgerIcon />
            <span className={cn(styles.link, "pl-1")}>Конструктор</span>
          </div>
          <div className={cn('pl-12')}>
            <ListIcon className={cn('pl-12')} type="secondary" />
            <span className={cn(styles.link, "pl-1")}>Лента заказов</span>
          </div> */}
          <BurgerIcon />
          <span className={cn(styles.link, "pl-1", 'mr-4')}>Конструктор</span>
          <ListIcon className={cn("ml-2")} type="secondary" />
          <span className={cn(styles.link, "pl-1")}>Лента заказов</span>
        </div>
        <Logo />
        <div className={styles.block}>
          <ProfileIcon type="secondary" />
          <span className={cn(styles.link, "pl-1")}>Личный кабинет</span>
        </div>
      </div>
    </header>
  );
}

import React from "react";

// import cn from "classnames";
import s from "./burger-ready.module.css";

export function BurgerReady() {
  return (
    <section className={s.main}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      <p>Блоки</p>
    </section>
  );
}

export default BurgerReady;

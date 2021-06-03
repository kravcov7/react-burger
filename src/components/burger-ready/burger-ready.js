import React from "react";
import Burger from "../burger/burger";

// import cn from "classnames";
import s from "./burger-ready.module.css";

export function BurgerReady() {
  return (
    <section className='mt-10'>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      <Burger />
    </section>
  );
}

export default BurgerReady;

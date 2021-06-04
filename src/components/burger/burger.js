import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

// import cn from "classnames";
import s from "./burger.module.css";
import BurgerImage from "../burger-image/burger-image";

export function Burger() {
  return (
    <section className={s.main}>
      <div className="p-6">
        <div className={s.data}>
          <span className="text text_type_digits-default">#034535</span>
          <div className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</div>
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-6">Death Star Starship Main бургер</h2>
        <div className={s.footer}>          
          <BurgerImage />
          <div className={s.price}>
            <div className="text text_type_digits-default mr-2">480</div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Burger;

import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import cn from "classnames";
import s from "./burger.module.css";
import BurgerImage from "../burger-image/burger-image";
import PropTypes from "prop-types";

export function Burger({ name, status }) {
  let text = "";
  
  if (status === "completed") text = "Выполнен";
  // if (status === "completed") return { text: 'Выполнен', color: 'green'};
  if (status === "canceled") text = "Отменен";
 
  return (
    <section className={s.main}>
      <div className="p-6">
        <div className={s.data}>
          <span className="text text_type_digits-default">#034535</span>
          <div className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</div>
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-2">{name}</h2>
        {/* <h2 className={cn(s[`status_color_${color}`], "text text_type_main-default mb-26")}>{ st.text }</h2> */}
        <h2 className={cn(s.status_color_green, "text text_type_main-default mb-26")}>{text}</h2>
        <div className={s.footer}>
          <ul className={s.container}>
            <li className={s.item} style={{ zIndex: 4 }}>
              <BurgerImage />
            </li>
            <li className={s.item} style={{ zIndex: 3 }}>
              <BurgerImage />
            </li>
            <li className={s.item} style={{ zIndex: 2 }}>
              <BurgerImage />
            </li>
            <li className={s.item} style={{ zIndex: 1 }}>
              <BurgerImage />
            </li>
            <li className={s.item} style={{ zIndex: 0 }}>
              <BurgerImage />
            </li>
          </ul>
          <div className={s.price}>
            <div className="text text_type_digits-default mr-2">480</div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

Burger.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Burger;

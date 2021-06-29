import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import cn from "classnames";
import s from "./burger.module.css";
import BurgerImage from "../burger-image/burger-image";

export function Burger({ el, data }) {
  // console.log(data);
  const stat = {};

  if (el.status === "completed") stat = { text: "Выполнен", colorText: "green" };
  if (el.status === "cancelled") stat = { text: "Отменен", colorText: "red" };
  if (el.status === "inProgress") stat = { text: "Готовится", colorText: "white" };

  const itemOrders = el.ingredients
    .map((el) => {
      return data.filter((item) => item._id === el);
    })
    .flat();
  // console.log(itemOrders);
  const price = itemOrders.reduce((acc, curr) => acc += curr.price, 0)
  console.log(price);

  return (
    <section className={s.main}>
      <div className="p-6">
        <div className={s.data}>
          <span className="text text_type_digits-default">#{el.number}</span>
          <div className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</div>
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-2">{el.name}</h2>
        <h2 className={cn(s[`status_color_${stat.colorText}`], "text text_type_main-default mb-26")}>{stat.text}</h2>
        <div className={s.footer}>
          <ul className={s.container}>
            {itemOrders.map((el, index) => (
              <li key={index} className={s.item} style={{ zIndex: 4 }}>
                <BurgerImage image={el.image_mobile} />
              </li>
            ))}           
          </ul>
          <div className={s.price}>
            <div className="text text_type_digits-default mr-2">{ price }</div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

Burger.propTypes = {
  // name: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
};

export default Burger;

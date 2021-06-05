import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import s from "./item-detail.module.css";
import cn from "classnames";
import ItemStructure from "../item-structure/item-structure";

function ItemDetails() {
  return (
    <section className={s.main}>
      <div>
        <span className={cn(s.span, "text text_type_digits-default")}>#034533</span>
        <h1 className={cn(s.title, "text text_type_main-medium mt-10")}>Black Hole Singularity острый бургер</h1>
        <p className={cn(s.status, "mt-3 mb-15")}>Выполнен</p>
        <h3 className={cn(s.structure, "text text_type_main-medium mb-6")}>Состав:</h3>
        <ul className={s.ingrid}>
          <li className={s.item}>
            <ItemStructure />
          </li>
          <li className={s.item}>
            <ItemStructure />
          </li>
          <li className={s.item}>
            <ItemStructure />
          </li>
          <li className={s.item}>
            <ItemStructure />
          </li>
        </ul>
        <div className={s.total}>
          <p className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</p>
          <div className={s.sum}>
            <p className="mr-2 text text_type_digits-default">510</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetails;

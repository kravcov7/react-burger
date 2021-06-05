import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import s from "./item-structure.module.css";
import cn from "classnames";
import BurgerImage from "../burger-image/burger-image";

function ItemStructure() {
  return (
    <section className={s.main}>
      <div className={s.name}>
        <BurgerImage />
        <p className={cn(s.name, 'ml-9 text text_type_main-default')}>Флюоресцентная булка R2-D3</p>
      </div>
      <div className={s.total}>
        <span className='mr-2 text text_type_digits-default'>20</span>
        <CurrencyIcon />
      </div>
    </section>
  );
}

export default ItemStructure;

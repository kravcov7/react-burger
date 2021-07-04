import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import s from "./item-structure.module.css";
import cn from "classnames";
import BurgerImage from "../burger-image/burger-image";
import { FC } from 'react';
import { TProduct } from "../../types";

type TProps = { el: any; count: number }

const ItemStructure:FC<TProps> =({ el, count }) => {
  
  return (
    <section className={s.main}>
      <div className={s.name}>
        <BurgerImage image={el.image_mobile} />
        <p className={cn(s.name, "ml-9 text text_type_main-default")}>{el.name}</p>
      </div>
      <div className={s.total}>
        <span className="mr-2 text text_type_digits-default">{count} X</span>
        <span className="mr-2 text text_type_digits-default">{el.price}</span>
        <CurrencyIcon type="primary" />
      </div>
    </section>
  );
}

export default ItemStructure;

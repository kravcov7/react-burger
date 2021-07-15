import React from "react";
import styles from "./card.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../hooks";
import { useDrag } from "react-dnd";
import { FC } from 'react';
import { TProduct } from "../../types";

type TProps = { el: TProduct }

const Card:FC<TProps> = React.memo(({ el }) => {
  const [, drag] = useDrag({
    type: "product",
    item: el,
  }); 
  
  const { counts, burger } = useSelector((store) => store.card);
  const count = el.type==='bun' && burger.bun?._id===el._id ? 2 : counts[el._id];
  // count = el.type==='bun' && burger.bun?._id===el._id ? 2 : id;
  
  return (
    <div ref={drag} data-cy='ingredient'  className={styles.card} key={el._id} >
      <img src={el.image} alt={el.name} />
      <p className={styles.price}>
        <span className="text text_type_digits-default mr-2">{el.price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={styles.name}>{el.name}</p>
      {count ? <Counter count={count} size="default" /> : null}
    </div>
  );
})

export default Card;

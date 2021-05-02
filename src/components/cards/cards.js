import React from "react";
import styles from './cards.module.css';
import {  CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export function Cards(props) {
  
  return (
    <>
      <h2 className="mt-4">{ props.title }</h2>
      <div className={styles.cards}>
        {props.ingredients.map((el) => {
          return (
            <div className={styles.card} key={el._id}>
              <img src={el.image} alt={el.name} />
              <p className={styles.price}>
                <span className="text text_type_digits-default">{el.price}</span>
                <CurrencyIcon type="primary" />
              </p>
              <p className={styles.name}>{el.name}</p>
              <Counter count={1} size="default" />
            </div>
          );
        })}
      </div>
    </>
  );
}



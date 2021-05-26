import React from "react";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import cn from "classnames";
import OrderDetails from "../order-details/order-details";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";
import { OPEN_MODAL, addOrder } from "../../services/actions/card";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const { burger } = useSelector((store) => store.card);

  const handleClick = () => {
    const ingredients = [...burger.fillings.map((el) => el._id), burger.bun, burger.bun];

    dispatch(addOrder(ingredients));
    dispatch({
      type: OPEN_MODAL,
      content: <OrderDetails />,
    });
  };

  let sum = burger.bun.price * 2;
  burger.fillings.forEach((el) => (sum += el.price));

  return (
    <section className={cn(styles.container)}>
      <header className={cn(styles.element, "mb-5")}>
        <ConstructorElement type="top" isLocked={true} text={`${burger.bun.name} (верх)`} price={burger.bun.price} thumbnail={burger.bun.image} />
      </header>
      <ul className={styles.list}>
        {burger.fillings.map((el) => (
          <li key={uuidv4()} className={cn(styles.item, "mb-5")}>
            <DragIcon type="primary" />
            <ConstructorElement text={el.name} price={el.price} thumbnail={el.image} />
          </li>
        ))}
      </ul>
      <div className={cn(styles.element, "mb-10")}>
        <ConstructorElement type="bottom" isLocked={true} text={`${burger.bun.name} (низ)`} price={burger.bun.price} thumbnail={burger.bun.image} />
      </div>

      <div className={styles.total}>
        <div className={cn(styles.price, "mr-10")}>
          <span className="text text_type_digits-default mr-2">{sum}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleClick}>
          Нажми на меня
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;

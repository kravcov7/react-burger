import React, { useContext } from "react";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import cn from "classnames";
import OrderDetails from "../order-details/order-details";
import PropTypes from "prop-types";
import { IngredientsContext, CurrentIngridientsContext } from "../context/app-context";
import { v4 as uuidv4 } from "uuid";

function BurgerConstructor() {
  const img = "https://code.s3.yandex.net/react/code/bun-02.png";

  const { setModal } = useContext(CurrentIngridientsContext);
  const { state } = useContext(IngredientsContext);
  const burger = state.burger;

  const handleClick = () => {
    setModal({
      isShow: true,
      content: <OrderDetails />,
    });
  };

  let sum = burger.bun.price * 2;
  burger.fillings.forEach(el => sum += el.price);
    
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
          <span className="text text_type_digits-default mr-2">{ sum }</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleClick}>
          Нажми на меня
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default BurgerConstructor;

import React, { useContext} from "react";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import cn from "classnames";
import OrderDetails from "../order-details/order-details";
import PropTypes from 'prop-types';
import { CurrentIngridientsContext } from '../context/app-context';

function BurgerConstructor() {
  const img = "https://code.s3.yandex.net/react/code/bun-02.png";

  const { setModal } = useContext(CurrentIngridientsContext)

  const handleClick = () => {
    setModal({
      isShow: true,
      content: <OrderDetails />
    })

  }
  return (
    <section className={cn(styles.container)}>
      <header className={cn(styles.element, "mb-5")}>
        <ConstructorElement type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={200} thumbnail={img} />
      </header>
      <ul className={styles.list}>
        <li className={cn(styles.item, "mb-5")}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
        <li className={cn(styles.item, "mb-5")}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
        <li className={cn(styles.item, "mb-5")}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
        <li className={cn(styles.item, "mb-5")}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
        <li className={cn(styles.item, "mb-5")}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
      </ul>
      <div className={cn(styles.element, "mb-10")}>
        <ConstructorElement type="bottom" isLocked={true} text="Краторная булка N-200i (низ)" price={200} thumbnail={img} />
      </div>

      <div className={styles.total}>
        <div className={cn(styles.price, 'mr-10')}>
          <span className="text text_type_digits-default mr-2">610</span>
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
	setModal: PropTypes.func.isRequired
}

export default BurgerConstructor;

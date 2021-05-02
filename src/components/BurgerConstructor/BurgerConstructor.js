import React from "react";
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import cn from "classnames";

export function BurgerConstructor() {
  const img = "https://code.s3.yandex.net/react/code/bun-02.png";
  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.element, "mb-5")}>
        <ConstructorElement type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={200} thumbnail={img} />
      </div>
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
          <span className="text text_type_digits-default">610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Нажми на меня
        </Button>
      </div>
    </div>
  );
}

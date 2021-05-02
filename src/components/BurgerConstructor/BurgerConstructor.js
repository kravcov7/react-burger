import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import cn from 'classnames';

export function BurgerConstructor() {
  const img = "https://code.s3.yandex.net/react/code/bun-02.png";
  return (
    <div className={ cn(styles.container, 'mt-25') }>
      <div className={"ml-8"}>
        <ConstructorElement type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={200} thumbnail={img} />
      </div>
      <ul className= {styles.list}>
        <li className={styles.item}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
        <li className={styles.item}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
        <li className={styles.item}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
        <li className={styles.item}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
        <li className={styles.item}>
          <DragIcon type="primary" />
          <ConstructorElement text="Краторная булка N-200i (верх)" price={50} thumbnail={img} />
        </li>
      </ul>
      <div className={"ml-8"}>
        <ConstructorElement type="bottom" isLocked={true} text="Краторная булка N-200i (низ)" price={200} thumbnail={img} />
      </div>
    </div>
  );
}

import React from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab, CurrencyIcon  } from "@ya.praktikum/react-developer-burger-ui-components";

export function BurgerIngredients() {
  const [current, setCurrent] = React.useState("buns");
  return (
    <>
      <section className={ styles.header}>
        <h1>Соберите бургер</h1>
        <div className={styles.tabs}>
          <Tab value="one" active={current === "buns"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === "sauces"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === "mains"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </section>

      <section className={ styles.main}>
        <h2 className='mt-4'>Булки</h2>
        <div className={ styles.cards }>
          <div className={ styles. card }>
            <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt='' />
            <p className={ styles.price }>
              <span className='' >20</span>
              <CurrencyIcon type="primary" />
            </p>
            <p>Краторная булка N-2000</p>
          </div>
        </div>
      </section>
    </>
  );
}

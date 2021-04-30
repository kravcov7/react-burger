import React from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

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
      </section>
    </>
  );
}

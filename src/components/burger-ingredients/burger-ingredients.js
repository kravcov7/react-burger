import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Cards } from '../cards/cards';

export function BurgerIngredients({ array }) {
  const [current, setCurrent] = React.useState("buns");

  const bun = array.filter((item) => item.type === "bun");
  const sauce = array.filter((item) => item.type === "sauce");
  const main = array.filter((item) => item.type === "main");
  return (
    <div>
      <section className={styles.header}>
        <h1>Соберите бургер</h1>
        <div className={styles.tabs}>
          <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="mains" active={current === "mains"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </section>

      <section className={styles.main}>
        <Cards title='Булки' ingredients={ bun } />
        <Cards title='Соусы' ingredients={ sauce } />
        <Cards title='Начинки' ingredients={ main } />        

      </section>
    </div>
  );
}

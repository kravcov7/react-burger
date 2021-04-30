import React from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export function BurgerIngredients({ array }) {
  const [current, setCurrent] = React.useState("buns");

  const bun = array.filter((item) => item.type === "bun");
  return (
    <>
      <section className={styles.header}>
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

      <section className={styles.main}>
        <h2 className="mt-4">Булки</h2>
        <div className={styles.cards}>
          {bun.map((el) => {
            return (
              <div className={styles.card}>
                <img src={ el.image } alt={el.name} />
                <p className={styles.price}>
                  <span className="text text_type_digits-default">{ el.price }</span>
                  <CurrencyIcon type="primary" />
                </p>
                <p>{ el.name }</p>
                <Counter count={1} size="default" />
              </div>
            );
          })}
        </div>

        
      </section>
    </>
  );
}

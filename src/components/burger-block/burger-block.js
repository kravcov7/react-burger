import React from "react";
import styles from "./burger-block.module.css";
import { data } from "../../utils/data";

import BurgerIngredients  from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";

export function BurgerBlock() {
  return (
    <section className={styles.main}>
      <BurgerIngredients array={data} />
      <BurgerConstructor />
    </section>
  );
}

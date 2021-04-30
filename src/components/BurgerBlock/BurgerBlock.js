import React from "react";
import styles from './BurgerBlock.module.css';

import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";

export function BurgerBlock() {
  return (
    <section className={ styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </section>
    
  );
}

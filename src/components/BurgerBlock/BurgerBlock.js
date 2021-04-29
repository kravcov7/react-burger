import React from "react";

import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";

export function BurgerBlock() {
  return (
    <>
      <BurgerIngredients />
      <BurgerConstructor />
    </>
  );
}

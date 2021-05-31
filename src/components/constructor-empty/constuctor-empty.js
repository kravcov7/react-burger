import React from "react";
import s from "./constructor-empty.module.css";

function ConstructorEmpty() {
  return (
    <div className={s.container}>
      <h2>Соберите бургер</h2>
      <p>Перетащите ингредиенты из левой части </p>
    </div>
  );
}

export default ConstructorEmpty;

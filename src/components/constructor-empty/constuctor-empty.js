import React from "react";
import s from "./constructor-empty.module.css";
import cn from 'classnames';

function ConstructorEmpty() {
  return (
    <div className={cn(s.container, 'text', 'text_type_main-large')}>
      <h2 className={s.title}>Соберите бургер</h2>
      <p>Перетащите ингредиенты из левой части </p>
    </div>
  );
}

export default ConstructorEmpty;

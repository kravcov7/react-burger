import React from "react";

import cn from "classnames";
import s from "./orders.module.css";

export function Orders() {
  return (
    <section className={s.main}>
      <div className={s.table}>
        <div className={s.ready}>
          <h2 className={cn(s.title, "text text_type_main-medium mb-6")}>Готовы:</h2>
          <p className={cn(s.text, "text text_type_digits-default mb-2")}>034533</p>
          <p className={cn(s.text, "text text_type_digits-default mb-2")}>034532</p>
          <p className={cn(s.text, "text text_type_digits-default mb-2")}>034530</p>
          <p className={cn(s.text, "text text_type_digits-default mb-2")}>034527</p>
          <p className={cn(s.text, "text text_type_digits-default mb-2")}>034525</p>
        </div>
        <div className={s.progress}>
          <h2 className="text text_type_main-medium mb-6">В работе:</h2>
          <p className="text text_type_digits-default mb-2">034538</p>
          <p className="text text_type_digits-default mb-2">034541</p>
          <p className="text text_type_digits-default mb-2">034542</p>
        </div>
      </div>

      <div className="mb-15">
        <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
        <p className={cn(s.num, "text text_type_digits-large")}>28752</p>
      </div>
      <div className="">
        <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
        <p className={cn(s.num, "text text_type_digits-large")}>138</p>
      </div>
    </section>
  );
}

export default Orders;

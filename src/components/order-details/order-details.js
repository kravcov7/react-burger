import React from "react";
import s from "./order-details.module.css";
import cn from "classnames";
import doneOrder from "../../images/graphics.svg";

import { useSelector } from "react-redux";

function OrderDetails() {
  const { currentOrder, orderIsLoading, orderHasError } = useSelector((store) => store.card);
  console.log(currentOrder);
  
  return (
    <div className={s.order}>
      {orderIsLoading && "Загрузка..."}
      {orderHasError && "Произошла ошибка"}
      {!orderIsLoading && !orderHasError && (
        <>
          <h1 className={cn(s.order__title, "text", "text_type_digits-large", "pt-6")}>{0 || currentOrder.number}</h1>
          <p className={cn(s.order__subtitle, "text", "text_type_main-medium", "pb-15")}>идентификатор заказа</p>
          <img className={cn(s.order__image, "pb-15")} src={doneOrder} alt="ll" />
          <p className={cn(s.order__subtitle, "text", "text_type_main-default")}>Ваш заказ начали готовить</p>
          <p className={cn(s.order__subtitle, "text", "text_type_main-default", "text_color_inactive")}>Дождитесь готовности на орбитальной станции</p>
        </>
      )}
    </div>
  );
}

export default OrderDetails;

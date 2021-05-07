import React from "react";
import s from './order-details.module.css';
import cn from 'classnames';
import doneOrder from '../../images/graphics.svg'


function OrderDetails() {
  return (
    <div className={s.order}>
      <h1 className={cn(s.order__title, 'text', 'text_type_digits-large', 'pt-6')}>034536</h1>
      <p className={cn(s.order__subtitle, 'text', 'text_type_main-medium', 'pb-15')}>идентификатор заказа</p>
      <img className={s.order__image,  'pb-15'} src={doneOrder} alt='' />
      <p className={cn(s.order__subtitle, 'text', 'text_type_main-default')}>Ваш заказ начали готовить</p>
      <p className={cn(s.order__subtitle, 'text', 'text_type_main-default', 'text_color_inactive')}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;

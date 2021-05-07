import React from "react";
import s from './order-details.module.css';
import cn from 'classnames';

function OrderDetails({ name, image, carbohydrates, fat, proteins, calories }) {
  return (
    <div className={s.ingredients}>
      <h1 className={s.title}>Детали ингредиента</h1>
      <div className={s.container}>
        <img className={s.container__image} src={image} alt='' />
        <h2 className={s.container__subtitle}>{ name }</h2>
        <p className={s.container__text}>Превосходные котлеты из марсианской Магнолии для фирменных космических бургеров, набирающих популярность по всей вселенной.</p>
        <ul className={s.box}>
          <li className={s.box__item}>
            <p className={s.box__text}>Калории, ккал</p>
            <p className={cn('text_type_digits-default')}>{ calories }</p>            
          </li>
          <li className={s.box__item}>
            <p className={s.box__text}>Белки, г</p>
            <p className={cn('text_type_digits-default')}>{ proteins }</p>            
          </li>
          <li className={s.box__item}>
            <p className={s.box__text}>Жиры, г</p>
            <p className={cn('text_type_digits-default')}>{ fat }</p>            
          </li>
          <li className={s.box__item}>
            <p className={s.box__text}>Углеводы, г</p>
            <p className={cn('text_type_digits-default')}>{ carbohydrates }</p>            
          </li>
        </ul>

      </div>
      
    </div>
  );
}

export default OrderDetails;

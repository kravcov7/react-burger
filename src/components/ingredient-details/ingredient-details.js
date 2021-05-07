import React from "react";
import s from './ingredient-details.module.css';
import cn from 'classnames';

function IngredientsDetails({ name, image, carbohydrates, fat, proteins, calories }) {

  return (
    <div className={s.ingredient}>
      <h1 className={cn(s.title, 'text', 'text_type_main-large', 'mb-5')}>Детали ингредиента</h1>
      <div className={s.container}>
        <img className={s.container__image} src={image} alt='ингредиент' />
        <h2 className={cn(s.container__subtitle, 'text', 'text_type_main-medium')}>{ name }</h2>
        <p className={cn(s.container__subtitle, 'mb-8', 'mt-8', 'text', 'text_type_main-default')}>Превосходные котлеты из марсианской Магнолии для фирменных космических бургеров, набирающих популярность по всей вселенной.</p>
        <ul className={cn(s.box, 'mt-8')}>
          <li className={cn(s.box__item, 'text', 'text_type_main-default', 'text_color_inactive')}>
            <p className={s.box__text}>Калории, ккал</p>
            <p className={cn(s.box__sum, 'text_type_digits-default')}>{ calories }</p>            
          </li>
          <li className={cn(s.box__item, 'text', 'text_type_main-default', 'text_color_inactive')}>
            <p className={s.box__text}>Белки, г</p>
            <p className={cn(s.box__sum, 'text_type_digits-default')}>{ proteins }</p>            
          </li>
          <li className={cn(s.box__item, 'text', 'text_type_main-default', 'text_color_inactive')}>
            <p className={s.box__text}>Жиры, г</p>
            <p className={cn(s.box__sum, 'text_type_digits-default')}>{ fat }</p>            
          </li>
          <li className={cn(s.box__item, 'text', 'text_type_main-default', 'text_color_inactive')}>
            <p className={s.box__text}>Углеводы, г</p>
            <p className={cn(s.box__sum, 'text_type_digits-default')}>{ carbohydrates }</p>            
          </li>
        </ul>

      </div>
      
    </div>
  );
}

export default IngredientsDetails;

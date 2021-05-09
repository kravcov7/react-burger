import React from 'react';
import styles from './card.module.css';
import {  CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function Card({ el, openModal}) {
  const handleClick = () => {
    openModal(el)
  }
  
  return (
    <div className={styles.card} key={el._id} onClick={handleClick}>     
      <img src={el.image} alt={el.name} />
      <p className={styles.price}>
        <span className="text text_type_digits-default mr-2">{el.price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={styles.name}>{el.name}</p>
      <Counter count={1} size="default" />
    </div>
  );
}

Card.propTypes = {
  openModal: PropTypes.func,
  el: PropTypes.object
}

export default Card;

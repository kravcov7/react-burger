import React from "react";
import styles from "./card.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { ADD_INGREDIENTS_BUN, ADD_INGREDIENTS_FILLINGS } from "../../services/actions/card";
import { useDrag } from "react-dnd";

function Card({ el, openModal }) {
  const [{ isDrag }, drag] = useDrag({
    type: "product",
    item: el,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    el.type === "bun"
      ? dispatch({
          type: ADD_INGREDIENTS_BUN,
          el,
        })
      : dispatch({
          type: ADD_INGREDIENTS_FILLINGS,
          el,
        });
    openModal(el);
  };

  return (
    <div ref={drag} className={styles.card} key={el._id} onClick={handleClick}>
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
  el: PropTypes.object,
};

export default Card;

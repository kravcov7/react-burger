import React, { useMemo } from "react";
import styles from "./card.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";

const Card = React.memo(({ el, openModal }) => {
  const [{ isDrag }, drag] = useDrag({
    type: "product",
    item: el,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const handleClick = () => {
    openModal(el);
  };
  const id = useSelector(store => store.card.counts[el._id])

  const { counts, burger } = useSelector((store) => store.card);
  let count = el.type==='bun' && burger.bun?._id===el._id ? 2 : counts[el._id];
  // let count = el.type==='bun' && burger.bun?._id===el._id ? 2 : id;
  
  return (
    <div ref={drag} className={styles.card} key={el._id} onClick={handleClick}>
      <img src={el.image} alt={el.name} />
      <p className={styles.price}>
        <span className="text text_type_digits-default mr-2">{el.price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={styles.name}>{el.name}</p>
      {count ? <Counter count={count} size="default" /> : null}
    </div>
  );
})

Card.propTypes = {
  openModal: PropTypes.func,
  el: PropTypes.object,
};

export default Card;

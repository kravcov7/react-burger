import React from "react";
import styles from "./cards.module.css";
import PropTypes from "prop-types";
import Card from "../card/card";
import cn from "classnames";

function Cards({ title, ingredients, openModal, childRef }) {
  return (
    <>
      <h2 className={cn("text", "text_type_main-medium", "mb-6", "mt-10")} ref={ childRef }>{title}</h2>
      <div className={styles.cards}>
        {ingredients.map((el) => (
          <Card el={el} openModal={openModal} key={el._id} />
        ))}
      </div>
    </>
  );
}

Cards.propTypes = {
  title: PropTypes.string,
  openModal: PropTypes.func,
  ingredients: PropTypes.array,
  childRef: PropTypes.object,
};

export default Cards;

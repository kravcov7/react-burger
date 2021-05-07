import React from "react";
import styles from "./cards.module.css";
import PropTypes from "prop-types";
import Card from "../card/card";

export function Cards({ title, ingredients, openModal }) {
  return (
    <>
      <h2 className="mt-4">{title}</h2>
      <div className={styles.cards}>
        {ingredients.map((el) => (
          <Card el={el} openModal={openModal} key={el._id} />
        ))}
      </div>
    </>
  );
}

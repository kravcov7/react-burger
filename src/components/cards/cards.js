import React from "react";
import styles from "./cards.module.css";
import PropTypes from "prop-types";
import Card from "../card/card";
import cn from "classnames";
import { Link, useLocation } from 'react-router-dom'


function Cards({ title, ingredients, openModal, childRef }) {
  let location = useLocation()
  return (
    <>
      <h2 className={cn("text", "text_type_main-medium", "mb-6", "mt-10")} ref={childRef}>
        {title}
      </h2>
      <div className={styles.cards}>
        {ingredients.map((el) => (
          <Link className={styles.link} key={el._id} to={{pathname: `/ingredients/${el._id}`, 
          state: {background: location}}}>
            <Card el={el} openModal={openModal} />
          </Link>
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

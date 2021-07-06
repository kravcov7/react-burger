import styles from "./cards.module.css";
import React from "react";
import Card from "../card/card";
import cn from "classnames";
import { Link, useLocation } from 'react-router-dom';
import { TProduct } from "../../types";

type TProps = { title: string; ingredients: Array<TProduct> }

const Cards = React.forwardRef<HTMLHeadingElement, TProps> (({ title, ingredients }, ref) => {
  const location = useLocation()

  return (
    <>
      <h2 className={cn("text", "text_type_main-medium", "mb-6", "mt-10")} ref={ref}>
        {title}
      </h2>
      <div className={styles.cards}>
        {ingredients.map((el) => (
          <Link className={styles.link} key={el._id} to={{pathname: `/ingredients/${el._id}`, 
          state: {background: location}}}>
            <Card el={el} />
          </Link>
        ))}
      </div>
    </>
  );
})

export default Cards;

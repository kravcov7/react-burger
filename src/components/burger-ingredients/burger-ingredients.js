import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Cards } from '../cards/cards';
import PropTypes from 'prop-types';

function BurgerIngredients({ array }) {
  const [current, setCurrent] = React.useState("buns");

  const bun = array.filter((item) => item.type === "bun");
  const sauce = array.filter((item) => item.type === "sauce");
  const main = array.filter((item) => item.type === "main");
  console.log(bun);
  return (
    <div>
      <section className={styles.header}>
        <h1>Соберите бургер</h1>
        <div className={styles.tabs}>
          <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="mains" active={current === "mains"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </section>

      <section className={styles.main}>
        <Cards title='Булки' ingredients={ bun } />
        <Cards title='Соусы' ingredients={ sauce } />
        <Cards title='Начинки' ingredients={ main } />        

      </section>
    </div>
  );
}

BurgerIngredients.propTypes = {
  array: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number,
  })).isRequired,
}

export default BurgerIngredients;

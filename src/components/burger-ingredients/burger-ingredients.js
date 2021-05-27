import React  from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Cards from '../cards/cards';
import IngredientsDetails from '../ingredient-details/ingredient-details';
import cn from 'classnames';
import {  useSelector, useDispatch } from 'react-redux';
import { OPEN_MODAL, ADD_CURRENT_ITEM } from "../../services/actions/card";
import { useDrag } from 'react-dnd'

function BurgerIngredients() {
  // const [collected, drag, dragPreview] = useDrag(() => ({
  //   type,
  //   item: { id }
  // }))
  const dispatch = useDispatch();

  const [current, setCurrent] = React.useState("buns");
  const { data } = useSelector(store => store.card)

  const openModal = (item) => { 
    dispatch({
      type: ADD_CURRENT_ITEM,
      item
    })    
    dispatch({
      type: OPEN_MODAL,
      content: <IngredientsDetails />
    })
  }

  const bun = data.filter((item) => item.type === "bun");
  const sauce = data.filter((item) => item.type === "sauce");
  const main = data.filter((item) => item.type === "main");
  
  return (
    <div>
      <section className={styles.header}>
        <h1 className={cn(styles.title, 'text', 'text_type_main-large', 'mt-10' )}>Соберите бургер</h1>
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
        <Cards title='Булки' ingredients={ bun } openModal={openModal} />
        <Cards title='Соусы' ingredients={ sauce } openModal={openModal} />
        <Cards title='Начинки' ingredients={ main } openModal={openModal} />    
      </section>
    </div>
  );
}

export default BurgerIngredients;

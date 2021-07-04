import React, { useCallback } from "react";
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import cn from "classnames";
// import OrderDetails from "../order-details/order-details";
import { useDrop } from "react-dnd";

import { useSelector, useDispatch } from "react-redux";
import { addOrder, DELETE_ITEM, DECREASE_INGREDIENT } from "../../services/actions/card";
import { ADD_INGREDIENTS_BUN, ADD_INGREDIENTS_FILLINGS, INCREASE_INGREDIENT, MOVE_ITEM } from "../../services/actions/card";
import BurgerConstructorElements from "../burg-constr-elements/burger-constructor-elements";
import ConstructorEmpty from "../constructor-empty/constuctor-empty";
import { useLocation, useHistory } from 'react-router-dom';
import {TProduct} from '../../types';

type TBurger = { bun: TProduct; fillings: Array<TProduct>}

const BurgerConstructor = () => {
  const location = useLocation();
  const history = useHistory();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "product",
    drop: (item: TProduct) => {
      item.type === "bun"
        ? dispatch({
            type: ADD_INGREDIENTS_BUN,
            item,
          })
          : dispatch({
              type: ADD_INGREDIENTS_FILLINGS,
              item,
            }) 
            dispatch({
              type: INCREASE_INGREDIENT,
              item,
            });
        },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const dispatch = useDispatch();
  const burger: TBurger = useSelector((store: any) => store.card.burger);

  const handleClick = () => {
    const ingredients = [...burger.fillings.map((el) => el._id), burger.bun, burger.bun];

    dispatch(addOrder(ingredients));
    history.push({
      pathname: '/',
      state: {
        background: location
      }
    });    
  };

  let sum = (burger.bun?.price || 0) * 2;
  burger.fillings.forEach((el) => (sum += el.price));

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch({
        type: MOVE_ITEM,
        toIndex: hoverIndex,
        fromIndex: dragIndex,
      });
    },
    [dispatch]
  );

  return (
    <section ref={drop} data-cy='drop-container' className={cn(styles.container)}>
      {burger.bun || burger.fillings.length ? (
        <>
          {burger.bun && (
            <header className={cn(styles.element, "mb-5")}  data-cy='bun1'>
              <ConstructorElement type="top" isLocked={true} text={`${burger.bun.name} (верх)`} price={burger.bun.price} thumbnail={burger.bun.image} />
            </header>
          )}
          <ul className={styles.list}  data-cy='fillings'>
            {burger.fillings.map((el, index) => {
              const deleteItem = () => {
                dispatch({
                  type: DECREASE_INGREDIENT,
                  key: el._id,
                  typeItem: el.type,
                });
                dispatch({
                  type: DELETE_ITEM,
                  id: el.productId,
                });
              };
              return <BurgerConstructorElements deleteItem={deleteItem} index={index} key={el.productId} item={el} moveItem={moveItem} />;
            })}
          </ul>
          {burger.bun && (
            <div className={cn(styles.element, "mb-10")}  data-cy='bun2'> 
              <ConstructorElement type="bottom" isLocked={true} text={`${burger.bun.name} (низ)`} price={burger.bun.price} thumbnail={burger.bun.image} />
            </div>
          )}

          <div className={styles.total}>
            <div className={cn(styles.price, "mr-10")}>
              <span className="text text_type_digits-default mr-2">{sum}</span>
              <CurrencyIcon type="primary" />
            </div>

            {burger.bun && (
              <Button type="primary" size="large" onClick={handleClick}>
                Нажми на меня
              </Button>
            )}
          </div>
        </>
      ) : (
        <ConstructorEmpty />
      )}
    </section>
  );
}

export default BurgerConstructor;

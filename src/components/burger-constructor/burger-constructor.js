import React, { useCallback } from "react";
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import cn from "classnames";
import OrderDetails from "../order-details/order-details";
import { useDrop } from "react-dnd";

import { useSelector, useDispatch } from "react-redux";
import { OPEN_MODAL, addOrder, DELETE_ITEM, DECREASE_INGREDIENT } from "../../services/actions/card";
import { ADD_INGREDIENTS_BUN, ADD_INGREDIENTS_FILLINGS, INCREASE_INGREDIENT, MOVE_ITEM } from "../../services/actions/card";
import BurgerConstructorElements from "../burg-constr-elements/burger-constructor-elements";
import ConstructorEmpty from "../constructor-empty/constuctor-empty";

function BurgerConstructor() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "product",
    drop: (item) => {
      item.type === "bun"
        ? dispatch({
            type: ADD_INGREDIENTS_BUN,
            item,
          })
        : dispatch({
            type: ADD_INGREDIENTS_FILLINGS,
            item,
          }) &&
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
  const { burger } = useSelector((store) => store.card);

  const handleClick = () => {
    const ingredients = [...burger.fillings.map((el) => el._id), burger.bun, burger.bun];

    dispatch(addOrder(ingredients));
    dispatch({
      type: OPEN_MODAL,
      content: <OrderDetails />,
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
    <section ref={drop} className={cn(styles.container)}>
      {burger.bun || burger.fillings.length ? (
        <>
          {burger.bun && (
            <header className={cn(styles.element, "mb-5")}>
              <ConstructorElement type="top" isLocked={true} text={`${burger.bun.name} (верх)`} price={burger.bun.price} thumbnail={burger.bun.image} />
            </header>
          )}
          <ul className={styles.list}>
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
            <div className={cn(styles.element, "mb-10")}>
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

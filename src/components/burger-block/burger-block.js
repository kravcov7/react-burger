import React from "react";
import styles from "./burger-block.module.css";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";

import { getIngredients } from "../../services/actions/card";
import { useDispatch, useSelector } from "react-redux";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function BurgerBlock() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { data, isLoading, hasError} = useSelector((store) => store.card);
  const { isShow, content } = useSelector((store) => store.modal);

  return (
    <section className={styles.main}>
      {isLoading && "Загрузка..."}
      {hasError && "Произошла ошибка"}
      {!isLoading && !hasError && data.length && (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />          
          <BurgerConstructor />
        </DndProvider>
      )}
      {isShow && <Modal>{content}</Modal>}
    </section>
  );
}

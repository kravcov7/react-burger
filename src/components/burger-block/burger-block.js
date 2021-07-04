import React from "react";
import styles from "./burger-block.module.css";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

// import { getIngredients } from "../../services/actions/card";
import {  useSelector } from "react-redux";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function BurgerBlock() {
  // const dispatch = useDispatch();
  const { data, isLoading, hasError } = useSelector((store) => store.card);

  // React.useEffect(() => {
  //   if (!dataReceived) {
  //     dispatch(getIngredients());
  //   }
  // }, [dispatch, dataReceived]);

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
    </section>
  );
}

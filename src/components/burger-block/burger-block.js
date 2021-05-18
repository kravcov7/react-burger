import React from "react";
import styles from "./burger-block.module.css";
import url from "../../utils/config";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";

import { IngredientsContext, CurrentIngridientsContext } from "../../context/app-context";

export function BurgerBlock() {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: [],
    burger: {
      bun: null,
      fillings: []
    },
  });

  const [modal, setModal] = React.useState({
    isShow: false,
    content: null,
  });

  React.useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = async () => {
    setState({ ...state, hasError: false, isLoading: true });
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`ошибка: ` + res.status);
      }
      const data = await res.json();
      // const burger = { bun: data.data[0], fillings: [data.data[1], data.data[2], data.data[3], data.data[8], data.data[5], data.data[7]] }      
      // setState({ ...state, data: data.data, burger: burger, isLoading: false });
      setState({ ...state, data: data.data, isLoading: false });
    } catch {
      setState({ ...state, hasError: true, isLoading: false });
    }
  };

  const { data, isLoading, hasError } = state;
  const { isShow, content } = modal;

  return (
    <section className={styles.main}>
      <IngredientsContext.Provider value={{ state, setState }}>
        <CurrentIngridientsContext.Provider value={{ modal, setModal }}>
          {isLoading && "Загрузка..."}
          {hasError && "Произошла ошибка"}
          {!isLoading && !hasError && data.length && (
            <>
              <BurgerIngredients   />
              { state.burger.bun && <BurgerConstructor  />}
              {/* <BurgerConstructor  /> */}
            </>
          )}
          {isShow && <Modal setModal={setModal}>{content}</Modal>}
        </CurrentIngridientsContext.Provider>
      </IngredientsContext.Provider>
    </section>
  );
}

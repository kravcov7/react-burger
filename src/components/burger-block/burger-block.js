import React from "react";
import styles from "./burger-block.module.css";
// import { data } from "../../utils/data";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";

export function BurgerBlock() {
  // const getBread = async() => {
  //   setState({ ...state, isLoading: true, hasError: false })
  //   try{

  //   }
  // }

  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: [],
  });

  React.useEffect(() => {
    getIngredients();
  }, []);

  const getIngredients = async () => {
    setState({ ...state, hasError: false, isLoading: true });
    try {
      const res = await fetch("https://norma.nomoreparties.space/api/ingredients");
      const data = await res.json();
      setState({ ...state, data: data.data, isLoading: false });
    } catch {
      setState({ ...state, hasError: true, isLoading: false });
    }
  };

  const { data, isLoading, hasError } = state;

  return (
    <section className={styles.main}>
      {isLoading && "Загрузка..."}
      {hasError && "Произошла ошибка"}
      {!isLoading && !hasError && data.length && 
      (<>
      <BurgerIngredients array={data} />
      <BurgerConstructor />
      </>)
      }
      
      
    </section>
  );
}

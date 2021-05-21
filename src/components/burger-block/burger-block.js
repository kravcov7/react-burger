import React from "react";
import styles from "./burger-block.module.css";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";

import {  CurrentIngridientsContext } from "../../context/app-context";

import { getIngredients } from '../../services/actions/card';
import { useDispatch, useSelector } from 'react-redux';

export function BurgerBlock() {
  const [modal, setModal] = React.useState({
    isShow: false,
    content: null,
  });
  const dispatch = useDispatch();

  React.useEffect(() => {    
    dispatch(getIngredients());
  }, [dispatch]);
  
  const { data, isLoading, hasError, burger } = useSelector( store => store.card);
  const { isShow, content } = modal;

  return (
    <section className={styles.main}>
      {/* <IngredientsContext.Provider value={{ state, setState }}> */}
        <CurrentIngridientsContext.Provider value={{ modal, setModal }}>
          {isLoading && "Загрузка..."}
          {hasError && "Произошла ошибка"}
          {!isLoading && !hasError && data.length && (
            <>
              <BurgerIngredients   />
              { burger.bun && <BurgerConstructor  />}              
            </>
          )}
          {isShow && <Modal setModal={setModal}>{content}</Modal>}
        </CurrentIngridientsContext.Provider>
      {/* </IngredientsContext.Provider> */}
    </section>
  );
}

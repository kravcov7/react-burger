import React from "react";
import styles from "./burger-block.module.css";
import url from "../../utils/config";
// import { data } from "../../utils/data";

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";

export function BurgerBlock() {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: [],
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
      const data = await res.json();
      setState({ ...state, data: data.data, isLoading: false });
    } catch {
      setState({ ...state, hasError: true, isLoading: false });
    }
  };

  const { data, isLoading, hasError } = state;
  const { isShow, content } = modal;

  return (
    <section className={styles.main}>
      {isLoading && "Загрузка..."}
      {hasError && "Произошла ошибка"}
      {!isLoading && !hasError && data.length && (
        <>
          <BurgerIngredients array={data} setModal={setModal} />
          <BurgerConstructor setModal={setModal} />
        </>
      )}
      {isShow && <Modal setModal={setModal}>{content}</Modal>}
    </section>
  );
}

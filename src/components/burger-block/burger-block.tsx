import styles from "./burger-block.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useSelector } from "../../hooks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Preloader from "../preloader/preloader";

const BurgerBlock = () => {
  const { data, isLoading, hasError } = useSelector((store) => store.card);

  return (
    <section className={styles.main}>
      {isLoading && <Preloader /> }
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

export default BurgerBlock;

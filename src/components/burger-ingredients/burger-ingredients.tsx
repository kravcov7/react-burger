import React, { useEffect, useRef }  from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Cards from '../cards/cards';

import cn from 'classnames';
import {  useSelector } from '../../hooks';
import { TProduct } from "../../types";

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("buns");
  const data: Array<TProduct> = useSelector((store) => store.card.data)

  const bun: Array<TProduct> = data.filter((item) => item.type === "bun");
  const sauce: Array<TProduct> = data.filter((item) => item.type === "sauce");
  const main: Array<TProduct> = data.filter((item) => item.type === "main");
	
	const headerRef = useRef<HTMLElement>(null);
	const bunRef = useRef<HTMLHeadingElement>(null);
	const sauceRef = useRef<HTMLHeadingElement>(null);
	const mainRef = useRef<HTMLHeadingElement>(null);

	const handleScroll = () => {
    if (headerRef && bunRef && sauceRef && mainRef && headerRef.current && bunRef.current && sauceRef.current && mainRef.current) {
		  const bunDistance = Math.abs(headerRef.current.getBoundingClientRect().top - bunRef.current.getBoundingClientRect().top)
		  const sauceDistance = Math.abs(headerRef.current.getBoundingClientRect().top - sauceRef.current.getBoundingClientRect().top)
		  const mainDistance = Math.abs(headerRef.current.getBoundingClientRect().top - mainRef.current.getBoundingClientRect().top)
		  const minDistance = Math.min(bunDistance, sauceDistance, mainDistance);
		  const currentHeader = minDistance === bunDistance ? 'buns' : minDistance === sauceDistance ? 'sauces' : 'mains';
      setCurrent((prevState: string) => (currentHeader === prevState ? prevState : currentHeader))
    }
	}

  useEffect(() => {
    if (current === 'buns') bunRef?.current?.scrollIntoView();
    if (current === 'sauces') sauceRef?.current?.scrollIntoView();
    if (current === 'mains') mainRef?.current?.scrollIntoView();
  }, [current]);

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

      <section className={styles.main}  ref={headerRef} onScroll={handleScroll}>
        <Cards title='Булки' ingredients={ bun } ref={bunRef}  />
        <Cards title='Соусы' ingredients={ sauce } ref={sauceRef}  />
        <Cards title='Начинки' ingredients={ main } ref={mainRef} />    
      </section>
    </div>
  );
}

export default BurgerIngredients;

import React, {  useEffect, useRef }  from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Cards from '../cards/cards';

import cn from 'classnames';
import {  useSelector } from 'react-redux';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("buns");
  const { data } = useSelector(store => store.card)

  const bun = data.filter((item) => item.type === "bun");
  const sauce = data.filter((item) => item.type === "sauce");
  const main = data.filter((item) => item.type === "main");
	
	const headerRef = useRef(null);
	const bunRef = useRef(null);
	const sauceRef = useRef(null);
	const mainRef = useRef(null);

	const handleScroll = () => {
		const bunDistance = Math.abs(headerRef.current.getBoundingClientRect().top - bunRef.current.getBoundingClientRect().top)
		const sauceDistance = Math.abs(headerRef.current.getBoundingClientRect().top - sauceRef.current.getBoundingClientRect().top)
		const mainDistance = Math.abs(headerRef.current.getBoundingClientRect().top - mainRef.current.getBoundingClientRect().top)
		const minDistance = Math.min(bunDistance, sauceDistance, mainDistance);
		const currentHeader = minDistance === bunDistance ? 'buns' : minDistance === sauceDistance ? 'sauces' : 'mains';
		setCurrent(prevState => (currentHeader === prevState.current ? prevState.current : currentHeader))
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
        <Cards title='Булки' ingredients={ bun } id="buns"  childRef={bunRef}  />
        <Cards title='Соусы' ingredients={ sauce } id="sauces"  childRef={sauceRef}  />
        <Cards title='Начинки' ingredients={ main } id="mains"   childRef={mainRef} />    
      </section>
    </div>
  );
}

export default BurgerIngredients;

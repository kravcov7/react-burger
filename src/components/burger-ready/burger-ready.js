import { Link } from "react-router-dom";
import Burger from "../burger/burger";

import cn from "classnames";
import s from "./burger-ready.module.css";
import {	useLocation} from 'react-router-dom';

export function BurgerReady() {
  const location = useLocation();
  const burgers = [ 1, 2, 3, 4, 5]
  return (
    <section className={cn(s.main, "mt-10")}>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      {burgers.map((element, index) => (
        <Link key={index} className={s.link} to={{ pathname: `/feed/${index}`, state: { background: location}}}>
          <Burger />
        </Link>
      ))}
    </section>
  );
}

export default BurgerReady;

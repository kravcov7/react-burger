import { Link } from "react-router-dom";
import Burger from "../burger/burger";

import cn from "classnames";
import s from "./burger-ready.module.css";
import BurgerConstructorElements from "../burg-constr-elements/burger-constructor-elements";

export function BurgerReady() {
  const burgers = [ 1, 2, 3, 4, 5]
  return (
    <section className={cn(s.main, "mt-10")}>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      {burgers.map((element, index) => (
        <Link key={index} className={s.link} to={`/feed/${index}`}>
          <Burger />
        </Link>
      ))}
    </section>
  );
}

export default BurgerReady;

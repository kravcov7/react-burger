import { Link } from "react-router-dom";
import Burger from "../burger/burger";

import cn from "classnames";
import s from "./burger-ready.module.css";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export function BurgerReady({ messages, data }) {
  const location = useLocation();  
    
  return (
    <section className={cn(s.main, "mt-10")}>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      {messages.orders?.map((el) => (
        <Link key={el.number} className={s.link} to={{ pathname: `/feed/${el.number}`, state: { background: location}}}>
          <Burger data={data} el={ el } />
        </Link>
      ))}
    </section>
  );
}

BurgerReady.propTypes = {
  // messages: PropTypes.object,
  data: PropTypes.array.isRequired,
};

export default BurgerReady;

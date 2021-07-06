import { Link } from "react-router-dom";
import Burger from "../burger/burger";
import cn from "classnames";
import s from "./burger-ready.module.css";
import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import { TOrder, TProduct } from "../../types";

type TProps = { orders: Array<TOrder>; data: Array<TProduct> }

const BurgerReady:FC<TProps> = ({ orders, data }) => {
  const location = useLocation();  
      
  return (
    <section className={cn(s.main, "mt-10")}>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      {orders?.map((el) => (
        <Link key={el._id} className={s.link} to={{ pathname: `/feed/${el.number}`, state: { background: location}}}>
          <Burger data={data} el={ el } />
        </Link>
      ))}
    </section>
  );
}

export default BurgerReady;

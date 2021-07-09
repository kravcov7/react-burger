import cn from "classnames";
import Orders from '../../components/orders/orders';
import BurgerReady from '../../components/burger-ready/burger-ready';
import { useDispatch, useSelector } from "../../hooks";
import {useEffect} from 'react';
import s from "./feed.module.css";
import { WS_CONNECTION_START } from "../../services/constants/socket";
import { TOrder, TProduct } from "../../types";

const Feed = () => {  
  const dispatch = useDispatch();
  const data: Array<TProduct> = useSelector((store) => store.card.data);
      
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    })
  }, [dispatch]);

  const orders: Array<TOrder> = useSelector((store) => store.ws.orders);
  const total= useSelector((store) => store.ws.total);
  const totalToday: number | null = useSelector((store) => store.ws.totalToday);

  return (
    <section className={cn(s.main, 'mt-10')}>
      <BurgerReady data={ data } orders={orders} />
      <Orders orders={orders} total={total} totalToday={totalToday} />
    </section>
  );
}

export default Feed;

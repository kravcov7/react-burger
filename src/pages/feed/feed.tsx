import cn from "classnames";
import Orders from '../../components/orders/orders';
import BurgerReady from '../../components/burger-ready/burger-ready';
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react';
import s from "./feed.module.css";
import { WS_CONNECTION_START } from "../../services/actions/socket";
import { TOrder, TProduct } from "../../types";

const Feed = () => {  
  const dispatch = useDispatch();
  const data: Array<TProduct> = useSelector((store: any) => store.card.data);
      
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    })
  }, [dispatch]);

  const orders: Array<TOrder> = useSelector((store: any) => store.ws.messages.orders);
  const total: string = useSelector((store: any) => store.ws.messages.total);
  const totalToday: string = useSelector((store: any) => store.ws.messages.totalToday);

  return (
    <section className={cn(s.main, 'mt-10')}>
      <BurgerReady data={ data } orders={orders} />
      <Orders orders={orders} total={total} totalToday={totalToday} />
    </section>
  );
}

export default Feed;

import cn from "classnames";
import Orders from '../../components/orders/orders';
import BurgerReady from '../../components/burger-ready/burger-ready';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';

import s from "./feed.module.css";
import { WS_CONNECTION_START } from "../../services/actions/socket";

export function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    })
  }, [dispatch]);


  return (
    <section className={cn(s.main, 'mt-10')}>
      <BurgerReady />
      <Orders />
    </section>
  );
}

export default Feed;

import cn from "classnames";
import Orders from '../../components/orders/orders';
import BurgerReady from '../../components/burger-ready/burger-ready';
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react';

import s from "./feed.module.css";
import { WS_CONNECTION_START } from "../../services/actions/socket";
import { getIngredients} from '../../services/actions/card'

export function Feed() {  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  const {data} = useSelector((store) => store.card);
    
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    })
  }, [dispatch]);

  const { messages } = useSelector((store) => store.ws);

  return (
    <section className={cn(s.main, 'mt-10')}>
      <BurgerReady data={ data } messages={messages} />
      <Orders messages={messages} />
    </section>
  );
}

export default Feed;

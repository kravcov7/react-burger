import React from "react";
import cn from "classnames";
import Orders from '../../components/orders/orders';
import BurgerReady from '../../components/burger-ready/burger-ready';

import s from "./feed.module.css";

export function Feed() {
  return (
    <section className={cn(s.main, 'mt-10')}>
      <BurgerReady />
      <Orders />
    </section>
  );
}

export default Feed;

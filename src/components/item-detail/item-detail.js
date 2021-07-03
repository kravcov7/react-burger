import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import s from "./item-detail.module.css";
import cn from "classnames";
import ItemStructure from "../item-structure/item-structure";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WS_CONNECTION_START } from "../../services/actions/socket";
import { WS_CONNECTION_START_AUTH } from "../../services/actions/socketAuth";
import { getIngredients } from "../../services/actions/card";
import { useParams } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { getStat } from "../../utils/helpers";

function ItemDetails() {
  const dispatch = useDispatch();
  const isProfile = !!useRouteMatch("/profile");
  const { id } = useParams();
  const { data, dataReceived } = useSelector((store) => store.card);

  React.useEffect(() => {
    if (!dataReceived) {
      dispatch(getIngredients());
    }
  }, [dispatch, dataReceived]);

  useEffect(() => {
    isProfile
      ? dispatch({
          type: WS_CONNECTION_START_AUTH,
        })
      : dispatch({
          type: WS_CONNECTION_START,
        });
  }, [dispatch]);

  const { messages } = useSelector((store) => (isProfile ? store.wsAuth : store.ws));
    
  const getItem = (arr, id) => {
    return arr?.filter((el) => {
      return el.number === Number(id);
    })[0];
  };
  let order = {};
  order = getItem(messages.orders, id) || null;

  const countItems = order?.ingredients.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const items = countItems ? Object.keys(countItems) : [];

  const itemOrders = items
    .map((el) => {
      return data.filter((item) => item._id === el);
    })
    .flat();
 
  const status = order?.status;
  const stat = getStat(status);

  const sum = itemOrders.reduce((acc, curr) => (acc += curr.price * countItems[curr._id]), 0);

  return (
    <section className={s.main}>
      <div>
        <span className={cn(s.span, "text text_type_digits-default")}>#{id}</span>
        <h1 className={cn(s.title, "text text_type_main-medium mt-10")}>{order?.name}</h1>
        <p className={cn(s.status, "mt-3 mb-15")}>{stat.text}</p>
        <h3 className={cn(s.structure, "text text_type_main-medium mb-6")}>Состав:</h3>
        <ul className={cn(s.ingrid)}>
          {itemOrders.map((el, index) => (
            <li key={index} className={cn(s.item, "mr-5")}>
              <ItemStructure count={countItems[el._id]} price={el.price} image={el.image_mobile} />
            </li>
          ))}
        </ul>
        <div className={s.total}>
          <p className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</p>
          <div className={s.sum}>
            <p className="mr-2 text text_type_digits-default">{sum}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetails;

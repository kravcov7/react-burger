import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import s from "./item-detail.module.css";
import cn from "classnames";
import ItemStructure from "../item-structure/item-structure";
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { WS_CONNECTION_START } from "../../services/actions/socket";
import { getIngredients} from '../../services/actions/card'

function ItemDetails() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  // const {data} = useSelector((store) => store.card);
    
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START
    })
  }, [dispatch]);

  const { messages } = useSelector((store) => store.ws);
  console.log(messages);

  return (
    <section className={s.main}>
      <div>
        <span className={cn(s.span, "text text_type_digits-default")}>#{ messages.number }</span>
        <h1 className={cn(s.title, "text text_type_main-medium mt-10")}>Black Hole Singularity острый бургер</h1>
        <p className={cn(s.status, "mt-3 mb-15")}>Выполнzzzzzzен</p>
        <h3 className={cn(s.structure, "text text_type_main-medium mb-6")}>Состав:</h3>
        <ul className={cn(s.ingrid)}>
          <li className={cn(s.item, "mr-5")}>
            <ItemStructure />
          </li>
          <li className={cn(s.item, "mr-5")}>
            <ItemStructure />
          </li>
          <li className={cn(s.item, "mr-5")}>
            <ItemStructure />
          </li>
          <li className={cn(s.item, "mr-5")}>
            <ItemStructure />
          </li>
          <li className={cn(s.item, "mr-5")}>
            <ItemStructure />
          </li>
          <li className={cn(s.item, "mr-5")}>
            <ItemStructure />
          </li>
          <li className={cn(s.item, "mr-5")}>
            <ItemStructure />
          </li>
          <li className={cn(s.item, "mr-5")}>
            <ItemStructure />
          </li>
        </ul>
        <div className={s.total}>
          <p className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</p>
          <div className={s.sum}>
            <p className="mr-2 text text_type_digits-default">510</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetails;

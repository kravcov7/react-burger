
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import s from "./burger.module.css";
import BurgerImage from "../burger-image/burger-image";
import { getTimeOrders } from "../../utils/helpers";
import { getStat } from "../../utils/helpers";
import {TProduct, TOrder} from '../../types';
import { FC } from "react";

type TProps = {el: TOrder; data: Array<TProduct>}

const Burger: FC<TProps>=({ el, data }) => {
  const status = el.status;  
  const stat = getStat(status)
  
  const itemOrders = el?.ingredients
    .map((el) => {
      return data?.filter((item) => item._id === el);
    })
    .flat();

  let numZInd: any = 6
  const price = itemOrders?.reduce((acc, curr) => (acc += curr.price), 0);
  const dateOrders = getTimeOrders(el?.createdAt);
  const count = itemOrders.length
  const countLeftover = count - numZInd
  
  const burgerItem = itemOrders.slice(0, numZInd)

  return (
    <section className={s.main}>
      <div className="p-6">
        <div className={s.data}>
          <span className="text text_type_digits-default">#{el?.number}</span>
          <div className="text text_type_main-default text_color_inactive">{dateOrders}</div>
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-2">{el?.name}</h2>
        <h2 className={cn(s[`status_color_${stat.colorText}`], "text text_type_main-default mb-26")}>{stat.text}</h2>
        <div className={s.footer}>
          <ul className={s.container}>
            {burgerItem?.map((el, index) => {
              numZInd -=1
              return <li key={index} className={s.item} style={{ zIndex: numZInd }}>
                <BurgerImage image={el?.image_mobile} />
              </li>
            })}
            { count> 6 ? (<div className={s.overlay}><span>{`+${countLeftover}`}</span></div>) : null}          
          </ul>
          <div className={s.price}>
            <div className="text text_type_digits-default mr-2">{price}</div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Burger;

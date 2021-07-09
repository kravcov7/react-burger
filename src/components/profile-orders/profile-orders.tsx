import { Link } from "react-router-dom";
import Burger from "../burger/burger";
import { useLocation } from "react-router-dom";
import { WS_CONNECTION_START_AUTH } from "../../services/constants/socketAuth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "../../hooks";

import s from "./profile-orders.module.css";
import { TOrder } from "../../types";

const ProfileOrders = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.card);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START_AUTH,
    });
  }, [dispatch]);
  
  const orders: Array<TOrder> = useSelector((store) =>  store.wsAuth.orders );
  
  const location = useLocation();
  return (
    <div className={s.burgers}>
      {orders?.map((el, index) => (
         <Link to={{ pathname: `/profile/orders/${el.number}`, state: { background: location } }} key={index} className={s.burgerlink}>
           <Burger el={el} data={data} />
         </Link> 
      ))}
    </div>
  );
}

export default ProfileOrders;
